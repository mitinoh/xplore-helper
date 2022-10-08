import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EP } from '../../interface/ep';
import { HttpService } from '../../service/http.service';
import { LocationCategory } from '../interface/location-category.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationCategory: LocationCategory[] = []

  constructor(
    private httpSerivce: HttpService,
    private messageService: MessageService
  ) { }

  getLocationCategoryList() {
    this.httpSerivce.doGet({ ep: EP.LOCATIONCATEGORY }).subscribe((data: any) => this.locationCategory = JSON.parse(data))
  }

  addNewCategory(newCategory: LocationCategory) {
    console.log(newCategory)
    this.httpSerivce.doPost({ ep: EP.LOCATIONCATEGORY, body: newCategory }).subscribe({
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error while creating', detail: error.message, sticky: true });
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'New category created' });
        this.getLocationCategoryList()
      }
    })
  }
}
