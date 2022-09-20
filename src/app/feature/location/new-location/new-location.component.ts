import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ByxDataTypeEnum, MceTableConf } from 'src/app/shared/interface/byx-table.interface';
import { HttpService } from '../../service/http.service';
import { NewLocationDialogComponent } from '../new-location-dialog/new-location-dialog.component';
import { Location } from '../interface/location.interface';
import { LocationService } from '../service/location.service';
import { EP } from '../../interface/ep';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss']
})
export class NewLocationComponent implements OnInit {

  tableConf: MceTableConf = {
    id: 'newLocationTable',
    ep: EP.NEWLOCATION,
    columns: [
      { field: 'name', type: ByxDataTypeEnum.STRING },
      { field: 'desc', type: ByxDataTypeEnum.STRING },
      { field: 'address', type: ByxDataTypeEnum.STRING },
    ],
    rowDbClick: (row: Location) => this.openNewLocationDialog(row)
  }

  constructor(
    protected httpService: HttpService,
    protected dialogService: DialogService,
    public locationService: LocationService) {
    this.locationService.getLocationCategoryList();
  }

  openNewLocationDialog(row: Location) {
    this.dialogService.open(NewLocationDialogComponent, {
      header: 'Insert new location',
      width: '70%',
      height: '70%',
      data: { row: row }
    });
  }

  ngOnInit(): void { }
}
