import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../_Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  responsedata:any;
  loginForm!: FormGroup;
  errormessage = '';

  constructor(private route:Router, private formBuilder : FormBuilder, private service:LoginService ) {

   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      role : ['',Validators.required],
    })
  }


  login()
  {
    localStorage.setItem('user',this.loginForm.value.email);
   if(this.loginForm.valid){
    this.service.proceedLogin(this.loginForm.value)
    .subscribe
    (
      {
      next:(res)=>
      {
        if(res!=null)
        {
          this.responsedata=res;
          this.responsedata.Status
          localStorage.setItem('tk',this.responsedata.token);

          localStorage.setItem('userid',JSON.stringify(this.responsedata.userId));
          localStorage.setItem('role',JSON.stringify(this.loginForm.value.role));
          localStorage.setItem('userName',JSON.stringify(this.responsedata.userName));

          if(this.loginForm.value.role=='Admin')
        {
          this.route.navigate(['/admin'])
        }
        else if (this.loginForm.value.role=='Washer')
        {
          this.route.navigate(['/washer'])
        }
        else if (this.loginForm.value.role=='Customer')
        {
          this.route.navigate(['/customer'])
        }
        else
        {
          this.route.navigate(['/signup'])
        }
        }
        alert("Logged in successfully")
      },
      error:()=>
      {
        alert("Incorrect Credentials")
      }
    }
    )
  }
  }
  
  
}
