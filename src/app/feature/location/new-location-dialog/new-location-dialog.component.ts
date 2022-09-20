import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GeometryType } from '../interface/geometry.interface';
import { Location } from '../interface/location.interface';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-new-location-dialog',
  templateUrl: './new-location-dialog.component.html',
  styleUrls: ['./new-location-dialog.component.scss']
})
export class NewLocationDialogComponent implements OnInit {

  row: Location;
  constructor(
    protected config: DynamicDialogConfig,
    public locationService: LocationService) {

    this.row = this.config.data.row
    this.row.geometry = { type: GeometryType.POINT, coordinates: [0, 0] }


    console.log(this.locationService.locationCategory)
  }

  ngOnInit(): void {
    console.log(this.row)
  }

}
