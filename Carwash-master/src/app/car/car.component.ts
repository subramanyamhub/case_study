import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from './Car_Service/api.service';
import { CarDialogComponent } from './car-dialog/car-dialog.component';
import { LoginService } from '../_Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  displayedColumns: string[] = ["id","name", "model", "status", "action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private api : ApiService, private authService:LoginService, private route:Router) { }

  
  openDialog() {
    this.dialog.open(CarDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val =="save"){
        this.getAllCars();
      }
    })
  }

  ngOnInit():void{
    this.getAllCars();
  }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  getAllCars(){
    this.api.getCar()
    .subscribe({
      next:(res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=>{
        alert("error while fetching the records")
      }
    })
  }

  editCar(row:any){
    localStorage.setItem('carId',row.id);


    this.dialog.open(CarDialogComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val =="update"){
        this.getAllCars();
      }
    })
      
  }

  deleteCar(id: number){
    this.api.deleteCar(id)
    .subscribe({
      next:(res)=>{
        alert("Car Deleted Successfully");
        this.getAllCars();
      },
      error:()=>{
        alert("Error While deleting the record");
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}