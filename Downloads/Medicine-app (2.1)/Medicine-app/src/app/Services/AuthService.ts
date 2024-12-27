import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  public register(user:any){
    return this.http.post('http://localhost:1010/register', user);
  }

  public login(users:any){
    return this.http.post('http://localhost:1010/token',users);
  }

  //this method is for local storage
  public setToken(jwtToken:string){
    localStorage.setItem('jwtToken', jwtToken)
  }
  public getToken(){
    return localStorage.getItem('jwtToken');
  }

  public getUserId() {
    const token = localStorage.getItem('jwtToken');
    if(!token){
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id;

  }
  public getUserRole() {
    const token = localStorage.getItem('jwtToken');
    if(!token){
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  }

  public isLoggedIn(){
    if(this.getToken() && this.getUserRole()){
      return true
    }

    return false;
  }
}
