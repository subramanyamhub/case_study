import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  apiurl ='http://localhost:54459/api/User/';

  constructor(private http:HttpClient) { }

  changeStatus(userstatus:any){
    return this.http.post(this.apiurl,userstatus);
    
  }
}
