import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { HttpService } from './feature/service/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDialogModule, DialogService} from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    DynamicDialogModule
  ],
  providers: [DialogService],

 
  bootstrap: [AppComponent],
  
})
export class AppModule { }
