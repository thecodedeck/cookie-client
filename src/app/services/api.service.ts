import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = 'http://localhost:3000';

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, body, {
      withCredentials: true,
    });
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${url}`, {
      withCredentials: true,
    });
  }
}
