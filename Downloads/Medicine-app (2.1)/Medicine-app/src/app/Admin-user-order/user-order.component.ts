import { Component, OnInit } from '@angular/core';
import { UserOrderService } from '../Services/user-order.service';
import { OrderCart } from '../order-cart';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Order } from '../order';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-order',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent implements OnInit {
  orderedCart:Order[]=[]
  orderId:any;
      constructor(private userOrder:UserOrderService,private router:Router,private modalService: NgbModal){}
      
      ngOnInit(): void{
        this.getUserOrder()
      }

      public getUserOrder(){
         this.userOrder.getAllOrders().subscribe((res:any)=>{
            console.log(res);
            this.orderedCart=res;
            console.log(res.cart.prod)
            

         })
      }

      public deleteOrderById(){
        this.userOrder.deleteOrderById(this.orderId).subscribe((res:any)=>{
         
          alert("product deleted") 
          this.ngOnInit();
          this.modalService.dismissAll();
        
        })
        
      }

      openDelete(targetModal: any, order: Order) {
        
        this.orderId = order.orderId;
        this.modalService.open(targetModal, {
          backdrop: 'static',
          size: 'lg'
         
        });
        this.router.navigateByUrl("/userOrder")
      }
      
}
