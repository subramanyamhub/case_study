import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewWasherService {

  constructor(private http: HttpClient) { }

  getWashers(){
    return this.http.get<any>("http://localhost:54459/api/ViewWasher");
  }

}
