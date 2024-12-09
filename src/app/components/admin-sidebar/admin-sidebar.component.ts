import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink,NgClass],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  linkType: string='adminDetails';
   
  linkClick(linkType:string){
    this.linkType = linkType;
  }
  getClassAl(){
    return{
      active: this.linkType ==='adminDetails'?true:false
    }
  }
  getClassEl(){
    return {
      active: this.linkType === 'employeeDetails'?true: false
    }
  }
  getClassIl(){
    return {
      active: this.linkType === 'investmentDetails'?true: false
    }
  }
  getClassCl(){
    return {
      active: this.linkType === 'customerDetails'?true: false
    }
  }
  getClassAboutl(){
    return {
      active: this.linkType === 'aboutDetails'?true: false
    }
  }
}
