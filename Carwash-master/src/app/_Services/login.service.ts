import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiurl ='http://localhost:54459/api/Login/login';

  constructor(private http:HttpClient) { }


  proceedLogin(usercred:any){
    return this.http.post<any>(this.apiurl,usercred);
    
  }

  isLoggedin(): boolean{
    return localStorage.getItem("tk") ? true:false;
  }

  removeToken(){
    localStorage.removeItem('tk');
  }

  GetToken(){
    return localStorage.getItem('tk')||''
  }

}
