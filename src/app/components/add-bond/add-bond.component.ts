import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentService } from '../../service/investment.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-bond',
  imports: [FormsModule,NgIf],
  templateUrl: './add-bond.component.html',
  styleUrl: './add-bond.component.css'
})
export class AddBondComponent {

  faceValue:number=0.0
  interestRate:number=0.0
  bondType:string|undefined
  maturityDate: string|undefined
  successMsg:string|undefined
  errorMsg:string|undefined

  constructor(private investmentService : investmentService){
  }



onSubmit(){
  console.log(this.faceValue);
  console.log(this.interestRate);
  console.log(this.bondType);
  console.log(this.maturityDate);
  
  this.investmentService.addBonds(
{
  faceValue:this.faceValue,
  interestRate:this.interestRate,
  bondType:this.bondType,
  maturityDate:this.maturityDate,
}
  ).subscribe({
    next:(data)=>{
      this.successMsg="Bond Added Successfully";
    },
    error:(err)=>
    {
      this.errorMsg=err.error.msg;
    }
  })
}
}
