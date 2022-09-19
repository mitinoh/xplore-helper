import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { njURL } from 'src/app/conf/server.conf';
import { ByxDataTypeEnum, MceTableConf } from 'src/app/shared/interface/byx-table.interface';
import { HttpService } from '../../service/http.service';
import { NewLocationDialogComponent } from '../new-location-dialog/new-location-dialog.component';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss']
})
export class NewLocationComponent implements OnInit {

  tableConf: MceTableConf = {
    id: 'newLocationTable',
    ep: '/new-location',
    columns: [ 
      { field: 'name', type: ByxDataTypeEnum.STRING},
      { field: 'desc', type: ByxDataTypeEnum.STRING},
      { field: 'address', type: ByxDataTypeEnum.STRING},
    ],
    rowDbClick: (row: Location) =>  this.openNewLocationDialog(row)
  }

  constructor(protected httpService: HttpService,
    public dialogService: DialogService) { 
  }


  openNewLocationDialog(row: Location) { 
    this.dialogService.open(NewLocationDialogComponent, {
      header: 'Insert new location',
      width: '70%',
      height: '70%'
    });
  }

  ngOnInit(): void {

  }


}
