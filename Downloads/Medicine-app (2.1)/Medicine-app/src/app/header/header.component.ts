import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../Services/AuthService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  view: boolean = false
  constructor(private router: Router, public authService: AuthService) { }

  onLogin() {
    if (localStorage.getItem('jwtToken')) {
      this.view = true;
    }
    return this.view
  }
  
  logOut() {
    localStorage.removeItem('jwtToken')
    this.router.navigateByUrl('/login')
  }



}


