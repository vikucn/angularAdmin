import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { investmentService } from '../../service/investment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bonds',
  imports: [RouterLink,AdminNavbarComponent,NgFor],
  templateUrl: './bonds.component.html',
  styleUrl: './bonds.component.css'
})
export class BondsComponent implements OnInit {
  // bondDetails = {
  //   faceValue: 1000.00,
  //   interestRate: 0.05, // 5%
  //   bondType: 'Government', // Assuming BondType enum has values like 'Government', 'Corporate', etc.
  //   maturityDate: new Date(2028, 11, 31),
  //   id: 1 // Example ID for this bond
  // };

  bonds:any[]=[]

  constructor(private investmentService : investmentService,private router:Router) {
    

   }

  ngOnInit(): void {
   this.investmentService.showAllBonds().subscribe({
    next:(data)=>{
      this.bonds=data;
      console.log(this.bonds)
    },
    error:(err)=>{}
   })
  }

  viewCustomersOnBond(bid:any){

    this.router.navigateByUrl("admin/customerBonds/"+bid);
  }

  addBonds(){
    this.router.navigateByUrl("admin/add-new-bond");
  }

}
