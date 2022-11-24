import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { LoginService } from '../_Services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



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

}
