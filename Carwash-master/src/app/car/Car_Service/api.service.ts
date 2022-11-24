import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postCar(data:any){
    return this.http.post<any>("http://localhost:54459/api/cars/", data);
  }

  getCar(){
    return this.http.get<any>("http://localhost:54459/api/Cars/");
  }

  putCar(data:any, id:number){
    return this.http.put<any>("http://localhost:54459/api/Cars/" + id, data);

  }

  deleteCar(id:number){
    return this.http.delete<any>("http://localhost:54459/api/Cars/" + id);
  }
}

