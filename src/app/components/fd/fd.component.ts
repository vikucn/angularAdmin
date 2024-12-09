import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { investmentService } from '../../service/investment.service';

@Component({
  selector: 'app-fd',
  imports: [NgFor,RouterLink,AdminNavbarComponent],
  templateUrl: './fd.component.html',
  styleUrl: './fd.component.css'
})
export class FdComponent implements OnInit{

  fixedDeposits:any[]=[]

  constructor(private investmentService: investmentService, private router:Router){}


  ngOnInit(): void {
    this.investmentService.showAllFixedDeposits().subscribe({
      next:(data)=>{this.fixedDeposits=data},
      error:(err)=>{}
    })
  }

  viewCustomersOnBond(fdid:any){

    this.router.navigateByUrl("admin/customerfd/"+fdid);
  }

  addFd(){
    this.router.navigateByUrl("admin/add-fd");
  }
}
