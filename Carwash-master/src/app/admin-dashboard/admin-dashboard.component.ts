import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { LoginService } from '../_Services/login.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  {

  constructor(private dialog:MatDialog, private route: Router,
    private authService: LoginService) { }
  openLogin() {
    this.dialog.open(LoginComponent,{
      width: '30%'
    });
  }

  openSignup() {
    this.dialog.open(SignupComponent,{
      width: '30%'
    });
  }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }
  
  btnClick1(){
    this.route.navigate(['/package']) 
  }

  btnClick2(){
    this.route.navigate(['/car']) 
  }


  btnClick3(){
    this.route.navigate(['/viewWashers']) 
  }

  btnClick4(){
    this.route.navigate(['/viewCustomers']) 
  }

  btnClick5(){
      this.dialog.open(ViewOrdersComponent,{
        width: '120%'
      });
    }

}

