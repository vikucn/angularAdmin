import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customerService } from '../../service/customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-account',
  imports: [NgFor],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent implements OnInit {


  accountDto:any[]=[]

  accountNumber:any
  
  constructor(private customerService : customerService  ,private actRoute: ActivatedRoute){
  //   this.actRoute.paramMap.subscribe(p=>{
  //     this.accountNumber = p.get('accountNumber');
  //     console.log(this.aid);
  
  
  this.actRoute.paramMap.subscribe(params => {
    this.accountNumber = params.get('accountNumber');
    console.log('Account Number:', this.accountNumber); // Check the value
  });
  
  // this.accountNumber="AC1234567890";
  
  }
    ngOnInit(): void {
      this.customerService.showCustomerByAccount(this.accountNumber).subscribe({
        next: (data) => {
            this.accountDto = data;
            console.log('Fetched account details:', this.accountDto);
            // console.log(data);
        },
        error: (err) => {
            console.error('Error fetching account details:', err);
        }
    });
    }
  
  
  
  
  //   ngOnInit(): void {
  //     this.customerService.showAccountDto(accountNumber:any).subscribe({
  //       next:(data)=>{this.accountDto=data},
  //       error:(err)={}
  //     })
  //   }
  
  
  
  


}
