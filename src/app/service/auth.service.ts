import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private signupApi = 'http://localhost:8081/auth/sign-up';
  private loginApi = 'http://localhost:8081/api/token';
  private userDetailsApi = 'http://localhost:8081/auth/user';
  private registerApi = 'http://localhost:8081/admin/register';
  


  constructor(private httpClient: HttpClient){}


  signUp(user: any) : Observable<any>{
      return this.httpClient.post(this.signupApi,user);
    }
    login(user: any): Observable<any> {
      return this.httpClient.post(this.loginApi, user);
  }
  getUserDetails(token: any): Observable<any>{
       
      const httpOptions = {
          headers: new HttpHeaders({
             Authorization: 'Bearer '+ token
          })
        };
      return this.httpClient.get(this.userDetailsApi,httpOptions); 
  }
  public registerAdmin(obj:any):Observable<any>{
    let postObj={
      firstName : obj.firstName,
      middleName: obj.middleName,
      lastName: obj.lastName,
      gender:obj.gender,
      contactNumber:obj.contactNumber,
      address:obj.address,
      user:{
          name:obj.firstName+' '+obj.lastName,
          username:obj.username,
          password:obj.password
      }
      }
      return this.httpClient.post(this.registerApi,postObj)
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //        Authorization: 'Bearer '+ localStorage.getItem('token')
    //     })
    //   };
    // return this.httpClient.post(this.registerApi,postObj,httpOptions)
  };



}