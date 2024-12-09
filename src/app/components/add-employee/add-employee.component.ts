import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { DocumentService } from '../../service/doument.service';

@Component({
  selector: 'app-add-employee',
  imports: [NgIf, ReactiveFormsModule,AdminNavbarComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  successMsg: string | undefined;
  errorMsg: string | undefined; 
  departments: any[] =[];
  jobTitles: any[] = [];
  employeeForm : FormGroup ; 

  file:any
   

  constructor(private adminService: AdminService,private documentService:DocumentService){ 
    this.employeeForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      contactNumber: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      gender: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required,Validators.minLength(4)]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      rePassword: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)])
    })

  }
   
  // ngOnInit(): void {
  //    this.adminService.getAllDepartments().subscribe({
  //     next: (data)=>{
  //       this.departments = data; 
  //     },
  //     error: (err)=>{}
  //    });

  //    this.adminService.getAllJobTitles().subscribe({
  //     next: (data)=>{
  //       this.jobTitles = data; 
  //     },
  //     error: (err)=>{}
  //    });


  // }

  onFormSubmit(){
    //console.log(this.executiveForm.value)
    if( this.employeeForm.value.password != this.employeeForm.value.rePassword){
       this.errorMsg='Passwords do not match, please try again..';
       this.successMsg = undefined; 
       return; 
    }
    this.adminService.postExecutive(this.employeeForm.value).subscribe({
      next: (data)=>{
        this.successMsg = 'Employee Onboarded. ';
        this.errorMsg = undefined; 
      },
      error: (err)=>{
        this.errorMsg = err.error.msg; 
      }
    })
  }
  
  resetMsg(){
    this.errorMsg = undefined; 
    this.successMsg = undefined; 
  }

  // onFileSelect(evnt:any){
  //   console.log(evnt.target.files[0])
  //   this.file=evnt.target.files[0]
  // }


  // uploadFile()
  // {
  //   this.adminService.getEmployeeById
  //   let formData = new FormData();
  //   formData.set
  //   this.documentService.uploadImage(formData,this.id)
  // }
}
