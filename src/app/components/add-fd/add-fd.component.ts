import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentService } from '../../service/investment.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-fd',
  imports: [FormsModule,NgIf],
  templateUrl: './add-fd.component.html',
  styleUrl: './add-fd.component.css'
})
export class AddFdComponent {

  depositAmount:number=0.0
  interestRateFd:number=0.0
  maturityDateFd:string|undefined
  successMsg:string|undefined
  errorMsg:string|undefined


  constructor(private investmentService : investmentService){}

  onSubmit(){
    this.investmentService.addFixedDeposit({
      depositAmount:this.depositAmount,
      interestRateFd:this.interestRateFd,
      maturityDateFd:this.maturityDateFd
    }).subscribe({
      next:(data)=>{
        this.successMsg="FD Added Successfully";
      },
      error:(err)=>{
        this.errorMsg=err.error.msg;
      }
    })
  }

}
