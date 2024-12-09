import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  name: string ="";
  username: string ="";
  password: string=""; 
  errorMsg: string | undefined;
  successMsg: string | undefined;
  signUpForm : FormGroup ; 

  constructor(private authService: AuthService,private router:Router){

    this.signUpForm=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      middleName:new FormControl(''),
      // middleName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      contactNumber:new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address:new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required,Validators.minLength(4)]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      rePassword: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)])
  })
  }
//   onSignUp(){
//     this.authService.signUp({
//       name: this.name,
//       username: this.username,
//       password: this.password
//     }).subscribe({
//       next: (data)=>{
//         this.successMsg = 'Sign Up Success, Please login';
//       },
//       error: (err)=>{
//         console.log(err)
//         this.errorMsg = err.error.msg; 
//       }
//     })
// }

onRegister(){
  if(this.signUpForm.value.password!=this.signUpForm.value.rePassword){
    this.errorMsg="Password do not match, Please try again..."
    this.successMsg= undefined;
    return;
  }
  this.authService.registerAdmin(this.signUpForm.value).subscribe({
    next:(data)=>{
      this.successMsg="Thanks you for registering!!!";
      this.errorMsg=undefined;
      this.router.navigateByUrl("/login")
    },
    error:(err)=>{
this.errorMsg=err.error.msg;
    }
})
}

resetMsg(){
  this.errorMsg = undefined; 
  this.successMsg = undefined; 
}


}
