import { Component, OnInit } from '@angular/core';
import { njURL } from 'src/app/conf/server.conf';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss']
})
export class NewLocationComponent implements OnInit {

  newLocation: Location[] = [];

  constructor(protected httpService: HttpService) { 
    this.initNewLocationList()
  }

  initNewLocationList() {
    this.httpService.doGet({ ep: '/new-location' }).subscribe((res: any) => { this.newLocation = JSON.parse(res); console.log(this.newLocation) })
  }

  ngOnInit(): void {

  }

}
