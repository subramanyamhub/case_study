import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddWasherComponent } from 'src/app/add-washer/add-washer.component';
import { LoginService } from 'src/app/_Services/login.service';
import { UserStatusService } from 'src/app/_Services/user-status.service';
import { ViewWasherService } from '../ViewWasherService/view-washer.service';

@Component({
  selector: 'app-view-washers',
  templateUrl: './view-washers.component.html',
  styleUrls: ['./view-washers.component.css']
})
export class ViewWashersComponent implements OnInit {

  constructor(private route: Router,
    private authService: LoginService,
    private api : ViewWasherService,
    private userstatus: UserStatusService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
      this.getAllWashers();
  }

  displayedColumns: string[] = ["washerId","washerName", "washerPhnumber","washerEmail", "washerStatus","action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }


  getAllWashers(){
    this.api.getWashers()
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



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addWasher(){
    this.dialog.open(AddWasherComponent,{
      width: '30%'
    });
  }

}
