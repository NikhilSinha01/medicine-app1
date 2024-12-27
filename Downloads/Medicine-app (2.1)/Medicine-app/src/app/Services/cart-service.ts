import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  constructor(private http:HttpClient,private authService:AuthService) { }
 

  public addToCart(cartItemRequest:any){
    return this.http.post('http://localhost:3030/cart',cartItemRequest)

  }
  
  public getCart(){
    const tokenId =this.authService.getUserId()
    return this.http.get('http://localhost:3030/cart/user/'+tokenId);
  }
  public updateQuantity(id:String,proId:String,type:String){
    return this.http.put('http://localhost:3030/cart/quant/'+id+'/'+proId+'/'+type,{})

  }

  public deleteProductById(userId:String,productId:String){
    return this.http.delete('http://localhost:3030/cart/'+userId+'/'+productId)

  }

  public getCartByCartId(cartId:String){
    return this.http.get('http://localhost:3030/cart/'+cartId);
  }
  
}
