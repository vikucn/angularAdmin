import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-view-employee',
  imports: [NgFor,RouterLink,AdminNavbarComponent,NgIf

  ],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {

  successMsg:string|undefined
  errorMsg:string|undefined

  sample:any[]=[]

employee: any[]=[]

  // constructor(private adminService : AdminService){
  //   this.adminService.getEmployeeById(102).subscribe({
  //     next:(data)=>{this.employee=data;
  //       console.log(this.employee);
  //     },
  //     error:()=>{}
  //   })

  // }

  aid:any;

  constructor(private actRoute:ActivatedRoute , private adminService: AdminService,private route:Router){
    this.actRoute.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      console.log(this.aid);
      
    })


    this.adminService.getEmployeeById(this.aid).subscribe({
      next:(data)=>{this.employee=[data];
        console.log(this.employee);
      },
      error:(err)=>{}
    })
  }

  updateEmployee(empId:any){
    this.route.navigateByUrl('admin/editEmployee/'+empId)
  }

  getAccountId(){
    return this.aid;
  }

  deleteEmployee(){
    this.adminService.deleteEmployee(this.aid).subscribe({
      next:(data)=>{
        this.successMsg="Employee Deleted!!"
      },
      error:(err)=>{
        this.errorMsg="Please Try Again"
      }
    })
  }

  uploadPhoto(empId:any){
    this.route.navigateByUrl('admin/uploadImage/'+empId)
  }

}
