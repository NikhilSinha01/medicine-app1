import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  constructor(private http:HttpClient) { }

  public getAllOrders(){
    return this.http.get('http://localhost:3030/order');
   
  }
  public deleteOrderById(orderId:String){
    return this.http.delete('http://localhost:3030/order/'+orderId)
  }
}
