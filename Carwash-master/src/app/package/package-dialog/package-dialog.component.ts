import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Package_Services/api.service';

@Component({
  selector: 'app-package-dialog',
  templateUrl: './package-dialog.component.html',
  styleUrls: ['./package-dialog.component.css']
})
export class PackageDialogComponent implements OnInit {

  status = ["Active", "Inactive"];
  productForm!: FormGroup;
  actionBtn: string = "Save"
  packageId:any;
  

  
  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<PackageDialogComponent>) { }

    ngOnInit(): 
    void {
      this.productForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        status: ['', Validators.required]
      });
  /*"name", "description","price", "status"*/


  if(this.editData){

    this.actionBtn = "Update";

    this.productForm.controls['name'].setValue(this.editData.name);
    this.productForm.controls['description'].setValue(this.editData.description);
    this.productForm.controls['price'].setValue(this.editData.price);
    this.productForm.controls['status'].setValue(this.editData.status);
    
  }


}


addPackage()
{
  if(!this.editData)
  {
    if(this.productForm.valid){
        console.log(this.productForm.value);
      
      
      this.api.postPackage(this.productForm.value)
      .subscribe({
        next:(res) =>{
          alert("Package added successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the package")
        }
      })
  }
  
  }
  else{
    this.updatePackage()
  }
}

updatePackage(){


  this.packageId=localStorage.getItem('packageId')


  this.api.putPackage(this.productForm.value, this.packageId)
  .subscribe({
    next:(res)=>{
      alert("Product updated");
      this.productForm.reset();
      this.dialogRef.close("Update");
    },
    error:()=>{
      alert("error while updating");
      
    },
    
  })
}


}
