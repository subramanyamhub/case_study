import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewpackagedialogComponent } from '../customer/ViewPackageDialog/viewpackagedialog/viewpackagedialog.component';
import { PackageComponent } from '../package/package.component';
import { ApiService } from '../Package_Services/api.service';
import { LoginService } from '../_Services/login.service';
import { OrderService } from '../_Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private authService: LoginService,
    private route:Router,
    private formBuilder : FormBuilder,
    private api: OrderService) { }


    orderForm!: FormGroup;

    status = 'Pending';

    email = localStorage.getItem('user');


    
    ngOnInit(): void {
      this.orderForm = this.formBuilder.group({
        
        pkgName : localStorage.getItem('Name'),
        pkgDescription : localStorage.getItem('Description'),
        price : localStorage.getItem('Price'),
        regNumber : ['',Validators.required],
        address : ['',Validators.required],
        city : ['',Validators.required],
        state : ['',Validators.required],
        pincode : ['',Validators.required],
        instructions : ['',Validators.required],
        date : ['',Validators.required],
        status :['Pending',Validators.required],
        userEmail : [this.email]
      })
    }

  logOut(){
    this.authService.removeToken();
    this.route.navigateByUrl('/home');
  }
  id = localStorage.getItem('orderPackageId');
  name = localStorage.getItem('Name');
  description = localStorage.getItem('Description');
  price = localStorage.getItem('Price');

  
  ViewPackages(){
    this.dialog.open(ViewpackagedialogComponent,{
      width: '70%'
    });
  }


  placeOrder(){
    localStorage.setItem('orderDetails', this.orderForm.value.userEmail);
      this.api.OrderRequest(this.orderForm.value).subscribe(result=>{
        if(result!=null){
          alert("Order Placed");
        }
      })
    }
  
  
}


