import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { njURL } from 'src/app/conf/server.conf';
import { LoggerService } from '../../shared/service/logger.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    protected logger: LoggerService) { }

  doGet({ basePath = njURL, ep }: { basePath?: string, ep: string }): Observable<any> {
    let url: string = this.getUrl(basePath, ep)
    this.logger.http("GET", url)
    return this.http.get(url, { responseType: 'text' })
  }

  doPost({ basePath = njURL, ep, body, id }: { basePath?: string, ep: string, body: any, id?: string  }): Observable<any> {
    let url: string = this.getUrl(basePath, ep, id)
    this.logger.http("POST", url, body)
    return this.http.post(url, body, { responseType: 'text' })
  }

  doDelete({ basePath = njURL, ep, id }: { basePath?: string, ep: string, id: string }): Observable<any> {
    let url: string = this.getUrl(basePath, ep, id)
    this.logger.http("DELETE", url)
    return this.http.delete(url)
  }

  getUrl(basePath: string, ep: string, id?: string) { return basePath + ep + (id ? `/${id}` : '') }
}
