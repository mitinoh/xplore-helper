import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { NewLocationComponent } from './new-location/new-location.component';
import { HttpService } from '../service/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ByxTableComponent } from '../../core/byx-table/byx-table.component';
import { TableModule } from 'primeng/table';

import { NgVarDirective } from '../../shared/directive/ng-var.directive';
import { NewLocationDialogComponent } from './new-location-dialog/new-location-dialog.component';

@NgModule({
  declarations: [
    NewLocationComponent,
    ByxTableComponent,
    NgVarDirective,
    NewLocationDialogComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    TableModule
  ]
})
export class LocationModule { }
