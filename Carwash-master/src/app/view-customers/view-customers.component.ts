import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ViewWasherService } from '../ViewWashers/ViewWasherService/view-washer.service';
import { LoginService } from '../_Services/login.service';
import { UserStatusService } from '../_Services/user-status.service';
import { UserStatus } from './changeStatus';
import { ViewCustomerService } from './ViewCustomerService/view-customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  constructor(private route: Router,
    private authService: LoginService,
    private api : ViewCustomerService,
    private userstatus: UserStatusService) { }

  ngOnInit(): void {
      this.getAllCustomers();
  }

  displayedColumns: string[] = ["userId","userName", "userPhnumber","userEmail", "userStatus","action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }


  getAllCustomers(){
    this.api.getCustomers()
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
  action = "";


  ChangeStatus(userId:any,status:any){
    var userstatus = new UserStatus()
    userstatus.id=userId
    userstatus.UserStatus=status

    this.userstatus.changeStatus(userstatus).subscribe(result=>{
      if(result!=null){
          
          alert("Status Changed sucessfully");
      }
    })
    window.location.reload();
  }



  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}