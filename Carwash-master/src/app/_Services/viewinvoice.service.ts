import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewinvoiceService {

  constructor(private http:HttpClient) { }

  apiurl = 'http://localhost:54459/api/ViewInvoice?email=';

  ViewInvoice(){

    const email = localStorage.getItem('user');

    return this.http.get<any>(this.apiurl + email);
    
  }
}
