import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../_Services/signup.service';

@Component({
  selector: 'app-add-washer',
  templateUrl: './add-washer.component.html',
  styleUrls: ['./add-washer.component.css']
})
export class AddWasherComponent implements OnInit {

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
      role : ['Washer',Validators.required]
      
    })
  }

  signUp()
  {
    if(this.signupForm.valid){
      this.service.proceedSignup(this.signupForm.value).subscribe(result=>{
        if(result!=null){
          alert("Registration Successful");
         
        }
      })
    }
  }
}
