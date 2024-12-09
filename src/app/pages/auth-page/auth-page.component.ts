import { Component } from '@angular/core';
import { AuthHeaderComponent } from '../../components/auth-header/auth-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [RouterOutlet],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
