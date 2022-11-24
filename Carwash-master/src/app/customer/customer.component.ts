import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewInvoiceComponent } from '../view-invoice/view-invoice.component';
import { LoginService } from '../_Services/login.service';
import { ViewpackagedialogComponent } from './ViewPackageDialog/viewpackagedialog/viewpackagedialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private route: Router,
    private authService: LoginService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  myAccount(){
    this.route.navigateByUrl('/myAccount');
  }
  ViewPackages(){
    this.dialog.open(ViewpackagedialogComponent,{
      width: '70%'
    });
  }

  email = localStorage.getItem('user');
  ViewInvoice(){
    this.dialog.open(ViewInvoiceComponent,{
      width: '70%'
    });
  }
}
