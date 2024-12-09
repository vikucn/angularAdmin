import { Component } from '@angular/core';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from '../../components/admin-sidebar/admin-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [AdminNavbarComponent,AdminSidebarComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
