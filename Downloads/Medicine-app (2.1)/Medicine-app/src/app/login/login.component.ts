import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../Services/AuthService';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  public getLogin(regdata: NgForm) {
    if(regdata.valid){
    this.authService.login(regdata.value).subscribe((res: any) => {
      console.log(res.token);
      if (res) {
        let jwt = res.token;
        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        let isAdmin: Boolean
        this.authService.setToken(jwt);

        let role = decodedJwtData.role
        if (role === 'USER') {
          isAdmin = false;
        }
        else {
          isAdmin = true;
        }
        if (isAdmin) {
          this.router.navigateByUrl('/admin');
        }
        else {
          this.router.navigateByUrl('/product');
        }



      }
      else if(!res){
        alert("invalid credentials")
      }
    
    
     
      


    },
    (error) => {
      alert("Please Provide Valid Credentials");
    }
  )
 
    }
    else{
      alert("please provide required fields")
    }
  }


}
