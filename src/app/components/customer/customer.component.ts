import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { customerService } from '../../service/customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [RouterLink,NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{


  // customerDto:any[]=[]
  // space=' '

  // constructor(private customerService : customerService,private router:Router ){
    
  // }


  // ngOnInit(): void {
  //  this.customerService.showCustomerDto().subscribe({
  //   next:(data)=>{this.customerDto=data},
  //   error:(err)=>{}
  //  })
  // }

  // showCustomerDto(accountNumber:any){
  //   this.router.navigateByUrl('/admin/customerDto/?accountNumber'+accountNumber)
  // }

  showCustomerDto(accountNumber: any) {
    this.router.navigate(['/admin/customerDto', accountNumber]);
  }

 

  searchAccount() {
    const inputElement = document.getElementById('search') as HTMLInputElement;
    const accountNumber = inputElement.value.trim();
    console.log(accountNumber);
    // console.log(inputElement);

    if (accountNumber) {
      this.router.navigate(['/admin/customer-account',accountNumber]);
    } else {
      alert('Please enter a valid Account Number.');
    }
  }

  //pagination

  data:any[] = []
  page:number=0;
  size:number=6;
  totalElements: number = 0;
  pageArray:any[] =[];

  customerDto:any[]=[]
  space=' '


  constructor(private customerService : customerService,private router:Router ){
    this.getData();
  }


  ngOnInit(): void {
    console.log('working');
  }

  getData(){
    this.customerService.pagination(this.page,this.size).subscribe({
      next:(resp)=>{
        this.customerDto = resp.content; 
        this.totalElements = resp.totalElements;
        let totalPages = this.totalElements / this.size;
        let i=1; 
        this.pageArray = [];
        while(totalPages > 0){
          this.pageArray.push(i)
          totalPages = totalPages - 1;
          i++;
        }
        console.log(this.pageArray)
      },
      error:()=>{}
    })
   }
   prev(){
     if(this.page >0){
      this.page = this.page - 1 
      this.getData() 
    }
        
   }
   next(){
    this.page = this.page + 1 
    this.getData()
   }
   onClick(i:number){
      this.page = i
      this.getData()
   }

}
