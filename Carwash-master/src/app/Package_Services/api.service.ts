import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postPackage(data:any){
    return this.http.post<any>("http://localhost:54459/api/Packages/", data);
  }

  getPackage(){
    return this.http.get<any>("http://localhost:54459/api/Packages/");
  }

  putPackage(data:any, packageId:number){

    return this.http.put("http://localhost:54459/api/Packages/"+ packageId, data);

  }

  deletePackage(id:number){
    return this.http.delete<any>("http://localhost:54459/api/Packages/" + id);
  }
}
