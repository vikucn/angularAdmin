import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class investmentService{

private showAllBondsApi="http://localhost:8081/admin/bonds/details";
private showAllMutualFundsApi="http://localhost:8081/admin/mutualFunds/details";
private showAllFixedDepositsApi="http://localhost:8081/admin/fixedDeposit/details";

private showCustomersInBondsApi = "http://localhost:8081/admin/investment/bond/customer/ ";
private showCustomersInMutualFundsApi= " http://localhost:8081/admin/investment/mutualFunds/customer/";
private showCustomersInFixedDepositsApi=" http://localhost:8081/admin/investment/fixedDeposit/customer/";

private addBondsApi= " http://localhost:8081/admin/investment/addBonds";
private addMutualFundsApi= " http://localhost:8081/admin/investment/addMutualFunds";
private addFixedDepositsApi=" http://localhost:8081/admin/investment/addFixedDeposit";


constructor(private httpClient : HttpClient){}

public showAllBonds():Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
    return this.httpClient.get(this.showAllBondsApi, httpOptions);
}

public showAllMutualFunds():Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
    return this.httpClient.get(this.showAllMutualFundsApi, httpOptions);
}

public showAllFixedDeposits():Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
           Authorization: 'Bearer '+ localStorage.getItem('token')
        })
      };
    return this.httpClient.get(this.showAllFixedDepositsApi, httpOptions);
}

public showCustomersBonds(id:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.get(this.showCustomersInBondsApi+id,httpOptions);
}
public showCustomersMutualFunds(id:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.get(this.showCustomersInMutualFundsApi+id,httpOptions);
}

public showCustomersFixedDeposit(id:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.get(this.showCustomersInFixedDepositsApi+id,httpOptions);
}

public addBonds(bond:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.post(this.addBondsApi,bond,httpOptions);
}

public addMutualFunds(mutualFund:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.post(this.addMutualFundsApi,mutualFund,httpOptions);
}

public addFixedDeposit(fd:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ localStorage.getItem('token')
    })
  };
  return this.httpClient.post(this.addFixedDepositsApi,fd,httpOptions);
}


}