import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from '../order-details';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor(private http:HttpClient) { }

  public postDetails(order:any){
      return this.http.post('http://localhost:3030/order',order)
  }

  public createTransaction(amount:any){
    return this.http.get('http://localhost:4040/createTransaction/'+amount);
  }

  
}
