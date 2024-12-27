import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../order-details';
import { CheckOutService } from '../Services/check-out.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { response } from 'express';
import { CartService } from '../Services/cart-service';
import { CartCheckOut } from '../cart-check-out';
import { CommonModule } from '@angular/common';

declare var Razorpay:any
@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{
  price!:number;
  id!:String;
  cartCheckOut!:CartCheckOut
  constructor(private checkOut:CheckOutService,private route: ActivatedRoute,private cartService:CartService){}
 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.price = +params['price'] ||0; // Convert to number or default to 0
      this.id = params['id']||undefined;
      console.log(this.price);
      console.log(this.id);
      this.getCartByCartId(this.id);
    });
  }
  public getCartByCartId(id:String){
    this.cartService.getCartByCartId(id).subscribe((res:any)=>{
      this.cartCheckOut=res;
          console.log("my cart",this.cartCheckOut)
    })
  }
  // public checkOutRes(regdata:NgForm){
  //   this.checkOut.postDetails(regdata.value).subscribe((res:any)=>{
  //     console.log(res);
  //   })
  // }


  public checkOutRes(regdata:NgForm){
    if(regdata.valid){
    console.log("my cart",this.cartCheckOut)
    this.checkOut.postDetails({
      ...regdata.value,
      cart: this.cartCheckOut 
    }).subscribe((res: any) => {
      console.log(res);
     
    });
    this.createTransactionAndPlaceOrder();
    }
    else{
      alert("Please provide necessary fields")
    }
  }


  

  createTransactionAndPlaceOrder(){
    let price=this.price;
    this.checkOut.createTransaction(price).subscribe((res:any)=>{
      console.log(price);
      this.openTransactionModal(res);
      
    })
    }
    openTransactionModal(res:any){
      var options={
        orderId:res.orderId,
        key:res.key,
        amount:res.amount,
        currency:res.currency,
        name:'learning',
        description:"Payment done",
        handler:(res:any)=>{
          this.processResponse(res);
        },
        prefill:{
          name:'Nikhil',
          email:'nik@gmail.com',
          contact:'78868888'
        },
        notes:{
          address:'Online Medicine'
        },
        theme:{
          color:'#F37254'
        }
      };
      var razorPayObject=new Razorpay(options);
      razorPayObject.open();
    }
    processResponse(res:any){
      console.log(res);
    }

  }




