import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { LoginService } from '../_Services/login.service';

@Component({
  selector: 'app-washer',
  templateUrl: './washer.component.html',
  styleUrls: ['./washer.component.css']
})
export class WasherComponent implements OnInit {

  constructor(private authService:LoginService, private route:Router,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  ViewPendingOrders(){
    this.dialog.open(ViewOrdersComponent,{
      width: '120%'
    });
  }

}
