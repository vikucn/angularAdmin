import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class customerService{

private showCustomerDtoApi="http://localhost:8081/admin/getCustomerAllDetails";
private AccountDto="http://localhost:8081/admin/getCustomerDetailsByAccNum"
private getCustomerByAccountApi = "http://localhost:8081/admin/accountDto"

//pagination
private paginationApi= "http://localhost:8081/api/CustomerDetails/all"

constructor(private httpClient : HttpClient){}

public pagination(page:number, size: number):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.get(this.paginationApi+ '?page='+page + '&size='+size,httpOptions);
}

public showCustomerDto():Observable<any>
{
    const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
    return this.httpClient.get(this.showCustomerDtoApi, httpOptions);
}
    
public showAccountDto(accountNumber:any):Observable<any>
{
    const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
    return this.httpClient.get(this.AccountDto+"?accountNumber="+accountNumber, httpOptions);

}

public showCustomerByAccount(accountNumber:any):Observable<any>
{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
return this.httpClient.get(this.getCustomerByAccountApi+"?accountNumber="+accountNumber, httpOptions);
}
}