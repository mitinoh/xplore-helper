import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpService } from '../service/http.service';
import { NewLocationComponent } from './new-location/new-location.component';

const routes: Routes = [
  
      { path: '', redirectTo: 'new-location', pathMatch:'full' },
      { path:'new-location',component:NewLocationComponent, }
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule { }
