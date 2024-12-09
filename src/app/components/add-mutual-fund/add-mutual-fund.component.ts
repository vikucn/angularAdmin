import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentService } from '../../service/investment.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-mutual-fund',
  imports: [FormsModule,NgIf],
  templateUrl: './add-mutual-fund.component.html',
  styleUrl: './add-mutual-fund.component.css'
})
export class AddMutualFundComponent {

  name:string|undefined
  unitsPurchased:number=0.0
  purchasePrice:number=0.0
  successMsg:string|undefined
  errorMsg:string|undefined

  constructor(private investmentService : investmentService){}

  onSubmit(){
    this.investmentService.addMutualFunds(
      {
        name:this.name,
        unitsPurchased:this.unitsPurchased,
        purchasePrice:this.purchasePrice
      }
    ).subscribe({
      next:(data)=>{
        this.successMsg="Mutual Fund Added Successfully";
      },error:(err)=>{
        this.errorMsg=err.error.msg;
      }
    })
  }

}
