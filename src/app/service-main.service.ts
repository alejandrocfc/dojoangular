import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  baseUrl = 'http://172.23.81.55:8089/colaboradores';

  constructor( public http: HttpClient) { }

  public getData() {
    return this.http.get(this.baseUrl);
  }
}
