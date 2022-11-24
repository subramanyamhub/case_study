import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:54459/api/Orders/'
 

  OrderRequest(order:any){
    localStorage.setItem("order", order);
    return this.http.post(this.apiurl, order);
  }

  ViewOrderRequests(){
    return this.http.get<any>(this.apiurl);
  }

  ChangeOrderStatus(orderStatus:any){
    return this.http.put(this.apiurl+ 'Change', orderStatus);
  }

}
