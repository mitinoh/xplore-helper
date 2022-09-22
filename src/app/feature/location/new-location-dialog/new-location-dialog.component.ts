import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MceTableConf } from 'src/app/shared/interface/byx-table.interface';
import { EP } from '../../interface/ep';
import { HttpService } from '../../service/http.service';
import { GeometryType } from '../interface/geometry.interface';
import { Location } from '../interface/location.interface';
import { LocationService } from '../service/location.service';
import { LoggerService } from '../../../shared/service/logger.service'
import { LocationCategory } from '../interface/location-category.interface';

@Component({
  selector: 'app-new-location-dialog',
  templateUrl: './new-location-dialog.component.html',
  styleUrls: ['./new-location-dialog.component.scss']
})
export class NewLocationDialogComponent implements OnInit {

  row: Location;
  table: MceTableConf;

  constructor(
    protected config: DynamicDialogConfig,
    protected dialogService: DialogService,
    protected ref: DynamicDialogRef,
    protected locationService: LocationService,
    protected httpService: HttpService,
    protected messageService: MessageService,
    protected logger: LoggerService) {
    this.row = this.config.data.row
    this.table = this.config.data.table
    this.row.geometry = { type: GeometryType.POINT, coordinates: [0, 0] }
  }

  ngOnInit(): void { }

  complete(): void {
    this.createLocation();
  }

  createLocation() {
    delete this.row.indication
    let body: any = JSON.parse(JSON.stringify(this.row))
    body.locationCategory = this.row?.locationCategory?.map((category: LocationCategory) => category._id)
    delete body?._id
    this.httpService.doPost({ ep: EP.LOCATION, body: body }).subscribe({
      next: (res: any) => { this.logger.info(res) },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error while creating', detail: error.message, sticky: true });
      },
      complete: () => {
        this.deleteUserLocation()
      }
    })
  }

  deleteUserLocation() {
    this.httpService.doDelete({ ep: EP.NEWLOCATION, id: this.row._id }).subscribe({
      next: (res: any) => { this.logger.info(res) },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error while deleting', detail: error.message, sticky: true });
        this.closePopup()
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'Location created' });
        this.closePopup()
      }
    })
  }

  closePopup() {
    let idx: number = this.table.data.findIndex((td: Location) => td._id === this.row._id)
    this.table.data.splice(idx, 1)
    this.ref.close()
  }
}
