import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
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

  @ViewChild('tableRef') tableRefViewChild: any;

  tableConf: MceTableConf = {
    id: 'newLocationTable',
    ep: EP.NEWLOCATION,
    columns: [
      { field: '_id', type: ByxDataTypeEnum.STRING },
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

  newLocationDialog?: DynamicDialogRef;
  openNewLocationDialog(table: MceTableConf, row: Location) {
    this.newLocationDialog = this.dialogService.open(NewLocationDialogComponent, {
      header: 'Insert new location',
      width: '70%',
      height: '70%',
      data: { row: row, table: table }
    });
    this.newLocationDialog.onClose.subscribe((data: any) =>{
      this.tableRefViewChild.reloadTableData();
    });

    // getTableData
  }

  ngOnInit(): void { }
}
