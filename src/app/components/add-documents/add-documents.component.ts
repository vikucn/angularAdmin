import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { NgIf } from '@angular/common';
import { DocumentService } from '../../service/doument.service';

@Component({
  selector: 'app-add-documents',
  imports: [NgIf],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.css'
})
export class AddDocumentsComponent {


aid:any




cid:any;
selectedIdProofFile:any;
selectedPanFile:any;
selectedPhotoFile:any;
msg1:any|undefined;
msg2:any|undefined;

isPan:boolean = false;
isAadhar:boolean = false;
isPhoto:boolean = false;


  constructor(private actRoute:ActivatedRoute , private adminService: AdminService,private route:Router,private documentService:DocumentService){
    this.actRoute.paramMap.subscribe(p=>{
      this.aid = p.get('id');
      console.log(this.aid);
    })
  }

onFileSelect(event:any,type:any){
  const file = event.target.files[0]; 
  if (type === 'idProof') 
    { this.selectedIdProofFile = file; 

    }
  else if(type === 'photo'){
    this.selectedPhotoFile = file;
  }
}
uploadFileAadhar(){
  let formData = new FormData(); 
  formData.set('file', this.selectedIdProofFile);
  this.documentService.uploadIdProof(formData,this.aid).subscribe({
      next:(data)=>{
        this.isAadhar = true;
        this.msg1 = "Doc uploaded";
        this.msg2 = undefined;
       
      },
      error:()=>{}
    })

}

uploadFilePhoto() {
  let formData = new FormData(); 
  formData.set('file',this.selectedPhotoFile);
  this.documentService.uploadImage(formData,this.aid).subscribe({
      next:(data)=>{
        this.isPhoto = true;
        this.msg1= undefined;
        this.msg2 = "Doc uploaded";
      },
      error:()=>{}
    })
  }

  }


