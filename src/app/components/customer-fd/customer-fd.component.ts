import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { investmentService } from '../../service/investment.service';

@Component({
  selector: 'app-customer-fd',
  imports: [NgFor],
  templateUrl: './customer-fd.component.html',
  styleUrl: './customer-fd.component.css'
})
export class CustomerFdComponent {



  successMsg:string|undefined
  errorMsg:string|undefined

customerBonds: any[]=[]
  aid:any;

  constructor(private actRoute:ActivatedRoute , private investmentService: investmentService,private route:Router){
    this.actRoute.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      console.log(this.aid);
      
    })

    this.investmentService.showCustomersFixedDeposit(this.aid).subscribe({
      next:(data)=>{this.customerBonds=data;
        console.log(this.customerBonds);
      },
      error:(err)=>{}
    })
  }
}
