import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { investmentService } from '../../service/investment.service';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mutual-funds',
  imports: [NgFor,AdminNavbarComponent,RouterLink],
  templateUrl: './mutual-funds.component.html',
  styleUrl: './mutual-funds.component.css'
})
export class MutualFundsComponent implements OnInit{
  mutualFunds:any[]=[]


  constructor(private investmentService: investmentService, private router: Router){}


  ngOnInit(): void {
   this.investmentService.showAllMutualFunds().subscribe({
    next:(data)=>{this.mutualFunds=data},
    error:(err)=>{}   
   })
  }


  viewCustomersOnBond(bid:any){

    this.router.navigateByUrl("admin/customermutual/"+bid);
  }

  addMutualFunds(){
    this.router.navigateByUrl("admin/add-mutual");
  }
}
