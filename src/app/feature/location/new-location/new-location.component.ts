import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ByxDataTypeEnum, MceTableConf } from 'src/app/shared/interface/byx-table.interface';
import { HttpService } from '../../service/http.service';
import { NewLocationDialogComponent } from '../new-location-dialog/new-location-dialog.component';
import { Location } from '../interface/location.interface';
import { LocationService } from '../service/location.service';
import { EP } from '../../interface/ep';
import { GeometryType } from '../interface/geometry.interface';
import { LocationCategory } from '../interface/location-category.interface';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss']
})
export class NewLocationComponent implements OnInit {

  @ViewChild('tableRef') tableRefViewChild: any;
  newLocationDialog?: DynamicDialogRef;
  emptyLocation: Location = { geometry: { type: GeometryType.POINT, coordinates: [0, 0] } }
  newCategory: LocationCategory = { name: "" }
  tableConf: MceTableConf = {
    id: 'newLocationTable',
    ep: EP.NEWLOCATION,
    columns: [
      { field: 'name', type: ByxDataTypeEnum.STRING },
      { field: 'desc', type: ByxDataTypeEnum.STRING },
      { field: 'address', type: ByxDataTypeEnum.STRING },
    ],
    data: [],
    rowDbClick: (table: MceTableConf, row: Location) => this.openNewLocationDialog(table, row)
  }

  constructor(
    protected httpService: HttpService,
    protected dialogService: DialogService,
    public locationService: LocationService) {
    this.locationService.getLocationCategoryList();
  }

  ngOnInit(): void { }

  openNewLocationDialog(table: MceTableConf = this.tableConf, row: Location = this.emptyLocation) {
    this.newLocationDialog = this.dialogService.open(NewLocationDialogComponent, {
      header: 'Insert new location',
      width: '70%',
      height: '70%',
      data: { row: row, table: table, tableRef: this.tableRefViewChild }
    });
    //this.newLocationDialog.onClose.subscribe((data: any) => {});
  }

  createNewLocation() {
    this.locationService.addNewCategory(this.newCategory)
  }

}
