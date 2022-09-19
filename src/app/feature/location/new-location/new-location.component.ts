import { Component, OnInit } from '@angular/core';
import { njURL } from 'src/app/conf/server.conf';
import { ByxDataTypeEnum, MceTableConf } from 'src/app/shared/interface/byx-table.interface';
import { HttpService } from '../../service/http.service';

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
    ]
  }

  constructor(protected httpService: HttpService) { 
  }


  ngOnInit(): void {

  }


}
