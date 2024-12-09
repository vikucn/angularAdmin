import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AdminService } from '../../service/admin.service';
import { Router, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-admin-list',
    imports: [NgFor],
    templateUrl: './admin-list.component.html',
    styleUrl: './admin-list.component.css'
})
export class AdminListComponent {
    admin: any[]=[];


constructor(private adminService:AdminService){
    // this.adminService.getAdminByUsername(localStorage.getItem('username')).subscribe({
    //     next:(data)=>{
    //         this.admin=[data];
    //         console.log(data);
    //         console.log(this.admin);
    //     },
    //     error:(err)=>{}
        
    // })

    this.adminService.getAdminByUsername(localStorage.getItem('username')).subscribe({
        next:(data)=>{
            this.admin=[data];
            console.log(this.admin);

        },
        error:()=>{
            console.log("error occured")
        }
    })
}


  
}
