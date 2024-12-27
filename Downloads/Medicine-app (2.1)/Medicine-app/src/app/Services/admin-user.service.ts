import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  user!:any;

  constructor(private http:HttpClient) { }

  public getAllUsers(){
    return this.http.get('http://localhost:1010/user')
  }

  public getUserByUserId(userId:String){
    return this.http.get('http://localhost:1010/user/id/'+userId)

  }

  public editUserByUserId(userId:String,userEditing:any){
    return this.http.put('http://localhost:1010/user/'+userId,userEditing)
    console.log(this.user);
  }
  public deleteUserByUserId(userId:String){
   return this.http.delete('http://localhost:1010/user/'+userId)
  }
}
