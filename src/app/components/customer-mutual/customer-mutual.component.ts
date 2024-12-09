import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { investmentService } from '../../service/investment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-mutual',
  imports: [NgFor],
  templateUrl: './customer-mutual.component.html',
  styleUrl: './customer-mutual.component.css'
})
export class CustomerMutualComponent {



  successMsg:string|undefined
  errorMsg:string|undefined

customerBonds: any[]=[]
  aid:any;

  constructor(private actRoute:ActivatedRoute , private investmentService: investmentService,private route:Router){
    this.actRoute.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      console.log(this.aid);
      
    })

    this.investmentService.showCustomersMutualFunds(this.aid).subscribe({
      next:(data)=>{this.customerBonds=data;
        console.log(this.customerBonds);
      },
      error:(err)=>{}
    })
  }
}
