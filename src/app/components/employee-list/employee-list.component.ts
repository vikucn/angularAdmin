import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employeeList :any[]=[];
  space:String =" "
  employee:any[]=[];
  selectedEmployee:any

  constructor(private adminService: AdminService,private router : Router){

  }

  ngOnInit(): void {
    this.adminService.viewEmployee().subscribe({
      next:(data)=>{
        this.employeeList=data;
        console.log(this.employeeList);
      },
      error:(err)=>{}
    })
    
  }

  hasRoute(): any {
    // return this.router.url === '/customer/open-bank-account';
    }



  // viewEmployeeDetails(emp:any){
  //   this.selectedEmployee=emp
  //   this.adminService.getEmployeeById(emp).subscribe({
  //     next:(data)=>{this.employee=data;
  //       console.log(this.employee);
  //     },
  //     error:()=>{}
  //   })
  //   this.router.navigateByUrl('admin/view')
  // }
viewEmployeeDetails(emp:any){

        this.router.navigateByUrl("admin/view/"+emp);
    }  
   

  editEmployeeDetails(){


this.router.navigateByUrl('admin/editEmployee')
  }
add(){
  console.log(localStorage.getItem('username'));
  console.log(localStorage.getItem('token'));
  this.router.navigateByUrl('admin/addEmployee')

}
}
