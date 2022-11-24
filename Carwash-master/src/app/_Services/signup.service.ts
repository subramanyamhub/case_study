import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiurl = 'http://localhost:54459/api/user/signup'

  constructor(private http: HttpClient) { }

  proceedSignup(usercred:any){
    return this.http.post(this.apiurl, usercred)
  }
}
