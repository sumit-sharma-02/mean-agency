import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProviderClass } from '../models/providers.class';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  // URL Endpoint to our express app
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  // GET all records
  getProviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST - add a new record
  addProviders(newProvider: ProviderClass): Observable<any> {
    return this.http.post(this.apiUrl, newProvider);
  }

  // GET one record
  getProvider(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  // PUT update a record
  updateProvider(
    id: number,
    updatedProvider: ProviderClass
  ): Observable<ProviderClass> {
    return this.http.put<ProviderClass>(this.apiUrl + id, updatedProvider);
  }

  //DELETE delete a record
  deleteProvider(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
}
