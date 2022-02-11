import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {
  public API_BASE_URL: string;

  constructor(public http: HttpClient) {
    this.API_BASE_URL = environment.api_base_url;
  }

  get(url: string) {
    return this.http.get(this.API_BASE_URL + url);
  }
  getT<T>(url: string) {
    return this.http.get<T>(this.API_BASE_URL + url);
  }
  post(url: string, data: any) {
    return this.http.post(this.API_BASE_URL + url, data);
  }

  put(url: string, data: any) {
    return this.http.put(this.API_BASE_URL + url, data);
  }

  delete(url: string, data?: any) {
    return this.http.delete(this.API_BASE_URL + url);
  }
}
