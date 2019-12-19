import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
  baseUrl = 'http://172.23.81.235:8089/colaboradores';

  constructor( public http: HttpClient) { }

  public getData() {
    return this.http.get(this.baseUrl);
  }

  public updateData(data) {
    return this.http.put(`${this.baseUrl}/modificar`, data);
  }

  public save(data) {
    return this.http.post(`${this.baseUrl}/insertar`, data);
  }
}
