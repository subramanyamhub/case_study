import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginService } from '../_Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  btnClick(){
    this.route.navigateByUrl('/');
  }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

  getstarted(){
    this.dialog.open(LoginComponent,{
      width: '30%'
    });
  }

  aboutus()
  {
    this.route.navigateByUrl('/aboutus');
  }

}
