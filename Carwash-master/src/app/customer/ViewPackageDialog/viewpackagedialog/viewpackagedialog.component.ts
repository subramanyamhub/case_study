import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_Services/login.service';
import { ApiService } from 'src/app/Package_Services/api.service';
import { OrdersComponent } from 'src/app/orders/orders.component';

@Component({
  selector: 'app-viewpackagedialog',
  templateUrl: './viewpackagedialog.component.html',
  styleUrls: ['./viewpackagedialog.component.css']
})
export class ViewpackagedialogComponent implements OnInit {

  constructor(private dialog:MatDialog, private api : ApiService,
    private authService: LoginService,
    private route:Router) { }

  ngOnInit(): void { 
    this.getAllPackages();
  }

  displayedColumns: string[] = ["id","name", "description","price", "status", "Action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;




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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  PlaceOrder(row:any){
    localStorage.setItem('orderPackageId',row.id);
    localStorage.setItem('Price',row.price);
    localStorage.setItem('Name',row.name);
    localStorage.setItem('Description',row.description);
    
      this.dialog.open(OrdersComponent,{
        width: '50%'
      });
    }
  }

