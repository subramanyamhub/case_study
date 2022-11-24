import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
  ViewInvoive(id:number){
    return this.http.get("http://localhost:54459/api/ViewInvoice?id=" + id)

  }

}
