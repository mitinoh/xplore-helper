import { Injectable } from '@angular/core';
import { EP } from '../../interface/ep';
import { HttpService } from '../../service/http.service';
import { LocationCategory } from '../interface/location-category.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationCategory: LocationCategory[] = []

  constructor(protected httpSerivce: HttpService) { }

  getLocationCategoryList() {
    this.httpSerivce.doGet({ ep: EP.LOCATIONCATEGORY }).subscribe((data: any) => this.locationCategory = JSON.parse(data))
  }
}
