import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { NewLocationComponent } from './new-location/new-location.component';
import { ByxTableComponent } from '../../core/byx-table/byx-table.component';
import { TableModule } from 'primeng/table';
import { NgVarDirective } from '../../shared/directive/ng-var.directive';
import { NewLocationDialogComponent } from './new-location-dialog/new-location-dialog.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [

    NewLocationComponent,
    ByxTableComponent,
    NgVarDirective,
    NewLocationDialogComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LocationRoutingModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    MultiSelectModule,
    ButtonModule
  ]
})
export class LocationModule { }
