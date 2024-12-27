import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedAppService {
  constructor(private http:HttpClient) { }

  public getProduct():any{
    return this.http.get('http://localhost:2020/product');
  }

  public productById(id:String):any{
    return this.http.get('http://localhost:2020/product/'+id);


  }
 
  
}
