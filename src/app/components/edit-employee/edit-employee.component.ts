import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-edit-employee',
  imports: [ReactiveFormsModule,NgIf,AdminNavbarComponent],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

  successMsg: string | undefined;
  errorMsg: string | undefined; 
  employeeForm: FormGroup;
  employee:any;
  employeeCopy:any

  aid:any;

  file:any

  constructor(private actRoute:ActivatedRoute , private adminService: AdminService,private route:Router){
    this.actRoute.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      console.log(this.aid);
    })

    this.employeeForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      contactNumber: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required])
    })
    

  }



  ngOnInit(): void {

    this.adminService.getEmployeeById(this.aid).subscribe({
      next:(data)=>{
        this.employee = data;
        this.employeeForm = new FormGroup({
          firstName: new FormControl(this.employee.firstName,[Validators.required]),
          lastName: new FormControl(this.employee.lastName,[Validators.required]),
          dateOfBirth: new FormControl(this.employee.dateOfBirth,[Validators.required]),
          contactNumber: new FormControl(this.employee.contactNumber,[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
          address: new FormControl(this.employee.address,[Validators.required]),
          gender: new FormControl(this.employee.gender,[Validators.required]),
          salary: new FormControl(this.employee.salary,[Validators.required])
        })
      },
      error:(err)=>{
        this.errorMsg = "Some error occured please retry after some time";
      }
    })}

    onFormSubmit(){
      console.log(this.employee);
      
      this.employee.firstName = this.employeeForm.value.firstName;
      this.employee.lastName = this.employeeForm.value.lastName;
      this.employee.dateOfBirth  = this.employeeForm.value.dateOfBirth;
      this.employee.contactNumber  = this.employeeForm.value.contactNumber;
      this.employee.address  = this.employeeForm.value.address;
      this.employee.gender=this.employeeForm.value.gender;
      this.employee.salary=this.employeeForm.value.salary;
    console.log(this.employee);
    
      this.adminService.updateEmployee(this.employee,this.aid).subscribe({
        next:(data)=>{
          this.employee = [data];
   
          this.successMsg = "Profile Updated ..."
        },
        error:(err)=>{
          this.errorMsg="Please try after some time";
        }
      })
    }



  //   successMsg: string | undefined;
  // errorMsg: string | undefined; 
  // employeeForm: FormGroup;
  // employee:any;
  // employeeCopy:any

  // aid:any;

  // file:any

  // constructor(private actRoute:ActivatedRoute , private adminService: AdminService,private route:Router){
  //   this.actRoute.paramMap.subscribe(p=>{
  //     this.aid = p.get('id');
  //     console.log(this.aid);
  //   })
  //   this.employeeForm = new FormGroup({
  //     firstName: new FormControl('',[Validators.required]),
  //     lastName: new FormControl('',[Validators.required]),
  //     dateOfBirth: new FormControl('',[Validators.required]),
  //     contactNumber: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  //     address: new FormControl('',[Validators.required]),
  //     gender: new FormControl('',[Validators.required]),
  //     images:new FormControl('',[Validators.required])
  //   })
    

  // }



  // ngOnInit(): void {

  //   this.adminService.getDetailsById(this.aid).subscribe({
  //     next:(data)=>{
  //       this.employee = data;
  //       this.employeeForm = new FormGroup({
  //         firstName: new FormControl(this.employee.firstName,[Validators.required]),
  //         lastName: new FormControl(this.employee.lastName,[Validators.required]),
  //         dateOfBirth: new FormControl(this.employee.dateOfBirth,[Validators.required]),
  //         contactNumber: new FormControl(this.employee.contactNumber,[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  //         address: new FormControl(this.employee.address,[Validators.required]),
  //         gender: new FormControl(this.employee.gender,[Validators.required]),
  //         images:new FormControl(this.employee.images,[Validators.required])
  //       })
  //     },
  //     error:(err)=>{
  //       this.errorMsg = "Some error occured please retry after some time";
  //     }
  //   })}

  //    onFileSelect(evnt:any){
  //   console.log(evnt.target.files[0])
  //   this.file=evnt.target.files[0]
  // }

  // onFormSubmit(){
  //   console.log(this.employee);
  //   let formData = new FormData();
  //   formData.set('file',this.file);
  //   this.employee.firstName = this.employeeForm.value.firstName;
  //   this.employee.lastName = this.employeeForm.value.lastName;
  //   this.employee.dateOfBirth  = this.employeeForm.value.dateOfBirth;
  //   this.employee.contactNumber  = this.employeeForm.value.contactNumber;
  //   this.employee.address  = this.employeeForm.value.address;
  //   this.employee.gender=this.employeeForm.value.gender;
  //   this.employee.images=this.employeeForm.value.images;
  //   console.log(this.employee);

     
  //   this.adminService.uploadImage(formData,this.aid).subscribe({
  //     next:(data)=>{
  //               this.adminService.getDetailsById(this.aid).subscribe({
  //                 next:(data)=>{
  //                   this.employeeCopy=data;
  //                   this.employeeCopy.images.forEach((i:any)=>{
  //                       i.path = './images/'+i.fileName
  //                   });
  //                    this.successMsg = "Profile Updated ..."
  //                 },
  //                 error:()=>{
  //                   this.errorMsg="Please try after some time";
  //                 }
  //                 })
  //     },
  //     error:()=>{}
  //   })

  // }


}
