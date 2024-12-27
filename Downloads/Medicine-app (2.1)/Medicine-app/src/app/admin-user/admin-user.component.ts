import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUserService } from '../Services/admin-user.service';
import { AdminUser } from '../admin-user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [RouterModule,CommonModule,NgxPaginationModule],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css'
})
export class AdminUserComponent implements OnInit{
  adminUser:AdminUser[]=[]
  p:number=1;
  deleteid:any;
  constructor(private adminUse:AdminUserService,private router:Router,private modalService: NgbModal){}

  ngOnInit(): void {
    this.getAllUsers()
  }

  public getAllUsers(){
    this.adminUse.getAllUsers().subscribe((res:any)=>{
      this.adminUser=res;
    })
  }
  public userEdit(id:String){
    console.log(id);
    this.router.navigateByUrl(`/admin/userEdit?id=${id}`);
   

   }
   public deleteUserByUserId(){
    this.adminUse.deleteUserByUserId(this.deleteid).subscribe((res)=>{
      console.log("user deleted");
      alert("user deleted successfully")
      this.ngOnInit();
      this.modalService.dismissAll();
     
    })
  }
  openDelete(targetModal: any, friend: AdminUser) {
    this.deleteid = friend.userId;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
}
