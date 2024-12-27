import { Component } from '@angular/core';
import { SignUpInterface } from '../sign-up-interface';
import { FormsModule, NgForm} from '@angular/forms'
import { AuthService } from '../Services/AuthService';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private authService:AuthService, private router: Router){}
  register(regdata:NgForm){
    if(regdata.valid){
    this.authService.register(regdata.value).subscribe((res:any)=>{
      console.log(res.value);
    
      
    
})
this.router.navigateByUrl('/login');
    
  }
  else{
    alert("please provide the required fields")
  }
}
}