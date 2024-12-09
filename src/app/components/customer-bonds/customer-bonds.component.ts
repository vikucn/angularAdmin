import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { investmentService } from '../../service/investment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-bonds',
  imports: [NgFor],
  templateUrl: './customer-bonds.component.html',
  styleUrl: './customer-bonds.component.css'
})
export class CustomerBondsComponent {


  successMsg:string|undefined
  errorMsg:string|undefined

customerBonds: any[]=[]
  aid:any;

  constructor(private actRoute:ActivatedRoute , private investmentService: investmentService,private route:Router){
    this.actRoute.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      console.log(this.aid);
      
    })

    this.investmentService.showCustomersBonds(this.aid).subscribe({
      next:(data)=>{this.customerBonds=data;
        console.log(this.customerBonds);
      },
      error:(err)=>{}
    })
  }

}
