import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AdminService{

    
    private viewEmployeeApi="http://localhost:8081/admin/employee/all";
    private editEmployeeApi="http://localhost:8081/admin/employeedto/update/";
    private deleteEmployeeApi="http://localhost:8081/admin/delete/";
    private updateEmployeeApi="http://localhost:8081/admin/employeedto/update/";
    
    private userStatApi = 'http://localhost:8081/api/users-stat';
    private employeeByIdApi= "http://localhost:8081/admin/employee/";
   private postExecutiveApi='http://localhost:8081/admin/employee/add'
   private viewInvestmentsApi="http://localhost:8081/admin/showinvestments"
   private transactionStatApi= "http://localhost:8081/admin/api/transaction-stat"
   private allTransactionApi="http://localhost:8081/admin/alltransaction"
   private getAdminByUsernameApi="http://localhost:8081/admin/details";
   private adminUpdateApi="http://localhost:8081/admin/update";
   private viewAllTransactionApi= "http://localhost:8081/admin/alltransaction";

   //images
   private uploadImageApi ="http://localhost:8081/admin/employee/image/upload/";
   private getDetailsByIdApi=" http://localhost:8081/employee/one/";
   private getAllDetails=" http://localhost:8081/api/employee/all";

    constructor(  private httpClient : HttpClient){
    }

     public viewEmployee() : Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
        return this.httpClient.get(this.viewEmployeeApi, httpOptions);
    }

    public updateEmployee(employee:any,id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.post(this.updateEmployeeApi+id,employee,httpOptions)
    }

    public deleteEmployee(id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.delete(this.deleteEmployeeApi+id,httpOptions)
    }

    public getAllEmployees():Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.get(this.getAllDetails);
    }

    public getDetailsById(id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.get(this.getDetailsByIdApi+id,httpOptions);
    }


    public uploadImage(formData: FormData,id:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
      return this.httpClient.post(this.uploadImage+id,formData,httpOptions)
    }

    public getUserStat(): Observable<any>{
        const httpOptions = {
          headers: new HttpHeaders({
             Authorization: 'Bearer '+ localStorage.getItem('token')
          })
        };
        return this.httpClient.get(this.userStatApi,httpOptions);
      }

    public getEmployeeById(id:any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.employeeByIdApi+id,httpOptions)
    }

    // public updateEmployee(id:any,employee:any):Observable<any>{
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //            Authorization: 'Bearer '+ localStorage.getItem('token')
    //         })
    //       };
    //       return this.httpClient.post(this.employeeByIdApi+id,employee,httpOptions)
    // }

    public viewAllTransaction():Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
               Authorization: 'Bearer '+ localStorage.getItem('token')
            })
          };
          return this.httpClient.get(this.viewAllTransactionApi,httpOptions)
    }

    public postExecutive(obj: any) : Observable<any>{
                let postObj = {
                    user: {
                        name: obj.firstName+' '+obj.lastName,
                        username: obj.username,
                        password: obj.password
                        
                         },
                    
                        firstName: obj.firstName,
                        lastName: obj.lastName,
                        dateOfBirth: obj.dateOfBirth,
                        gender: obj.gender,
                        contactNumber: obj.contactNumber,
                        address: obj.address,
                        salary: obj.salary
                          }
                          const httpOptions = {
                            headers: new HttpHeaders({
                                Authorization: 'Bearer '+ localStorage.getItem('token')
                            })
                            };
                            return this.httpClient.post(this.postExecutiveApi,postObj,httpOptions)
                };
        

                public showInvestments():Observable<any>{
                    const httpOptions = {
                        headers: new HttpHeaders({
                           Authorization: 'Bearer '+ localStorage.getItem('token')
                        })
                      };
                      return this.httpClient.get(this.viewInvestmentsApi,httpOptions);
                }

                public getTransactionStat(): Observable<any>{
                    const httpOptions = {
                      headers: new HttpHeaders({
                         Authorization: 'Bearer '+ localStorage.getItem('token')
                      })
                    };
                    return this.httpClient.get(this.transactionStatApi,httpOptions);
                  }

                  public showTransactions():Observable<any>{
                    const httpOptions = {
                        headers: new HttpHeaders({
                           Authorization: 'Bearer '+ localStorage.getItem('token')
                        })
                      };
                      return this.httpClient.get(this.allTransactionApi,httpOptions);
                }

                public getAdminByUsername(username: any) : Observable<any>{
                    const httpOptions = {
                        headers: new HttpHeaders({
                           Authorization: 'Bearer '+ localStorage.getItem('token')
                        })
                      };
                    return this.httpClient.get(this.getAdminByUsernameApi+"?username="+username,httpOptions)
               }


               public updateAdmin(admin: any) : Observable<any>{
                    return this.httpClient.post(this.adminUpdateApi,admin);
                 }

               
    
            }
    