import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../_Services/login.service';
import { SignupService } from '../_Services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  responsedata:any;
  signupForm!: FormGroup;
  errormessage = '';
  hide = true;

  constructor(private route:Router, private formBuilder : FormBuilder, private service:SignupService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName :  ['',Validators.required],
      userAddress :['',Validators.required],
      userPhnumber : ['',Validators.required],
      userEmail : ['',Validators.required],
      userPassword : ['',Validators.required],
      userStatus : ['Active',Validators.required],
      role : ['Customer',Validators.required]
    })
  }


  signUp()
  {
    if(this.signupForm.valid){
      this.service.proceedSignup(this.signupForm.value).subscribe(result=>{
        if(result!=null)
        {
          alert("Registration Successful");
          this.route.navigate(['/home'])
        }
      })
    }
  }
  

}
