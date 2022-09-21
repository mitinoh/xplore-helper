import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(log: any): void {
    console.log(log)
  }

  warning(log: any): void {
    console.warn(log)
  }

  error(log: any): void {
    console.error(log)
  }

  http(method: string, url: string, body?: any): void {
    if (body)
      console.log(method, url, body)
    else
      console.log(method, url)
  }


}
