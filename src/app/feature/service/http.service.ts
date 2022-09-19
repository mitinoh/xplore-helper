import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { njURL } from 'src/app/conf/server.conf';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  doGet({ basePath = njURL, ep }: { basePath?: string, ep: string }): Observable<any> {
    let url: string = this.getUrl(basePath,ep)
    return this.http.get( url, { responseType: 'text' })
  }

  getUrl(basePath: string, ep: string) { return basePath + ep }
}
