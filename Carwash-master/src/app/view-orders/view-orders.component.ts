import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderStatus } from '../_Models/order_status';
import { OrderService } from '../_Services/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(private api : OrderService) { }

  washerName = localStorage.getItem('userName');
  PackageName = '';
  Address = '';
  data = '';
  OrderStatus = '';


  displayedColumns: string[] = ["id","pkgName", "pkgDescription", "regNumber","address","city","state","pinCode","instructions","date","status", "action"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit(): void {
    this.getAllOrders();
}
getAllOrders(){
  this.api.ViewOrderRequests()
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

  AcceptOrder(id: any){
    var newStatus = new OrderStatus()
    newStatus.orderId = id;
    newStatus.status = 'Accepted';

    console.log(newStatus);

    this.api.ChangeOrderStatus(newStatus).subscribe(result=>{
    })
    alert('Order Accepted')
  }

}
