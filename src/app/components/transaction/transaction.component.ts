import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-transaction',
  imports: [AdminNavbarComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  transaction:any[]=[]
  error: string |undefined

  constructor(private adminService : AdminService){

  }
  ngOnInit(): void {
    this.adminService.showTransactions().subscribe({
      next:(data)=>{
        this.transaction=[data];
      
        console.log(this.transaction);
      },
      error:(err)=>{
       
      }
    })
  }

  // ngOnInit(): void {
  //   this.adminService.viewEmployee().subscribe({
  //     next:(data)=>{
  //       this.employeeList=data;
  //       console.log(this.employeeList);
  //     },
  //     error:(err)=>{}
  //   })
    
  // }

  // transaction: any[] = [];

  // constructor(private adminService: AdminService) {}

  // ngOnInit(): void {
  //   this.adminService.viewAllTransaction().subscribe({
  //     next: (data) => {
  //       // Check if data is an array and then assign it
  //       if (Array.isArray(data)) {
  //         this.transaction = data;
  //         console.log('Transactions:', this.transaction); // This will log the entire array of transactions
  //       } else {
  //         console.error('Data is not an array:', data);
  //       }
  //     },
  //     error: (err) => {
  //       console.log('Error occurred:', err);
  //     }
  //   });
  // }






}
