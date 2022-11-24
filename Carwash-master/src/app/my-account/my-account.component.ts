import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_Services/login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private route: Router,
    private authService: LoginService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }

  back(){
    this.route.navigateByUrl('/customer');
  }

}
