import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-investment-list',
  imports: [NgFor,RouterLink],
  templateUrl: './investment-list.component.html',
  styleUrl: './investment-list.component.css'
})
export class InvestmentListComponent {




  investmentList :any[]=[];
 
  investment:any[]=[];

  constructor(private adminService: AdminService,private router : Router){

  }

  ngOnInit(): void {
    this.adminService.showInvestments().subscribe({
      next:(data)=>{
        this.investmentList=data;
        // console.log(this.investmentList);
      },
      error:(err)=>{}
    })
    
  }
  goToBonds(){this.router.navigateByUrl('admin/bonds')}
  goToFixedDeposits(){this.router.navigateByUrl('admin/fd')}
  goToMutualFunds(){this.router.navigateByUrl('admin/mutual-funds')}
}
