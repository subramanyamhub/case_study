import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewCustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get<any>("http://localhost:54459/api/ViewCustomers");
  }

}
