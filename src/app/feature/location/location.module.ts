import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { NewLocationComponent } from './new-location/new-location.component';
import { HttpService } from '../service/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NewLocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    TableModule
  ]
})
export class LocationModule { }
