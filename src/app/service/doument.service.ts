import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class DocumentService {
    status:any;
    private uploadIdProofApi="http://localhost:8081/admin/employee/idProof/upload/"
    private uploadImageApi ="http://localhost:8081/admin/employee/profilePic/upload/";

    constructor(private httpClient:HttpClient){

        }

        public uploadIdProof(formData: FormData,id:any):Observable<any>{
            const httpOptions = {
              headers: new HttpHeaders({
                 Authorization: 'Bearer '+ localStorage.getItem('token')
              })
            };
            return this.httpClient.post(this.uploadIdProofApi+id,formData,httpOptions)
          }

        public uploadImage(formData: FormData,id:any):Observable<any>{
            const httpOptions = {
              headers: new HttpHeaders({
                 Authorization: 'Bearer '+ localStorage.getItem('token')
              })
            };
            return this.httpClient.post(this.uploadImageApi+id,formData,httpOptions)
          }

}