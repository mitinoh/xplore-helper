import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModule } from './location/location.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpService } from './service/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LocationModule,
    RouterModule,
    FeatureRoutingModule,
  ],
  providers: [
    HttpService,
    HttpClient,
    HttpClientModule,
  ]
})
export class FeatureModule { }
