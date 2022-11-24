import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../Car_Service/api.service';

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrls: ['./car-dialog.component.css']
})
export class CarDialogComponent implements OnInit {
  
  status = ["Active", "Inactive"];
  carForm!: FormGroup;
  actionBtn: string = "Save"
  carId: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<CarDialogComponent>) { }

    ngOnInit(): void {
      this.carForm = this.formBuilder.group({
        name: ['', Validators.required],
        model: ['', Validators.required],
        status: ['', Validators.required]
      });
  /*"name", "model", "status"*/


  if(this.editData){

    this.actionBtn = "Update";
    this.carForm.controls['name'].setValue(this.editData.name);
    this.carForm.controls['model'].setValue(this.editData.model);
    this.carForm.controls['status'].setValue(this.editData.status);
    
  }


}


addCar()
{
  if(!this.editData)
  {
    if(this.carForm.valid){
        console.log(this.carForm.value);
      
      this.api.postCar(this.carForm.value)
      .subscribe({
        next:(res) =>{
          alert("Car added successfully");
          this.carForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the car")
        }
      })
  }
  
  }
  else{
    this.updateCar()
  }
}

updateCar(){

  this.carId=localStorage.getItem('carId')

  this.api.putCar(this.carForm.value, this.carId)
  .subscribe({
    next:(res)=>{
      alert("Car updated");
      this.carForm.reset();
      this.dialogRef.close("Update");
    },
    error:()=>{
      alert("error while updating");
      
    },
    
  })
}


}
