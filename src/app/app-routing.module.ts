import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {
    path: 'dashboard', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule), 
    data: {
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
