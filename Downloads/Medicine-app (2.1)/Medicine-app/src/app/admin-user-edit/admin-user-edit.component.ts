import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminUserService } from '../Services/admin-user.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminUserEdit } from '../admin-user-edit';

@Component({
  selector: 'app-admin-user-edit',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './admin-user-edit.component.html',
  styleUrl: './admin-user-edit.component.css'
})
export class AdminUserEditComponent implements OnInit {
  userId:any
  userEdit!:AdminUserEdit
  constructor(private route:ActivatedRoute,private adminUser:AdminUserService,private router:Router){
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.userId = params['id']; // Use the provided 'id' or default to 'default'
        this.getUserByUserId(this.userId)
       
    });
}
    public getUserByUserId(userId:String){
      this.adminUser.getUserByUserId(userId).subscribe((res:any)=>{
          console.log("my get res",res);
         this.userEdit=res
      })
    }
  
    public editUser(regdata:NgForm){
      if(regdata.valid){
      console.log("my user id",regdata.value.id)
      const id=regdata.value.id
      console.log(id);
      console.log(regdata)
      this.adminUser.editUserByUserId(id,regdata.value).subscribe((res:any)=>{
        alert("User Details Edited!")
        this.router.navigateByUrl("/admin/adminUser") 
      })

    }
    else{
      alert("please provide necessary fields")
    }
  }
  
   
}
