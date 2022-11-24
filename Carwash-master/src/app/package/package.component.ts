import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../Package_Services/api.service';
import { PackageDialogComponent } from './package-dialog/package-dialog.component';
import { LoginService } from '../_Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  displayedColumns: string[] = ["id","name", "description","price", "status", "action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private api : ApiService,
    private authService: LoginService,
    private route:Router){}


  openDialog() {
    this.dialog.open(PackageDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val =="save"){
        this.getAllPackages();
      }
    })
  }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  ngOnInit():void{
    this.getAllPackages();

  }

  getAllPackages(){
    this.api.getPackage()
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

  editPackage(row:any){
    localStorage.setItem('packageId',row.id);
    
    this.dialog.open(PackageDialogComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val =="update"){
        this.getAllPackages();
      }
    })
      
  }

  deletePackage(id: number){
    this.api.deletePackage(id)
    .subscribe({
      next:(res)=>{
        alert("Package Deleted Successfully");
        this.getAllPackages();
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