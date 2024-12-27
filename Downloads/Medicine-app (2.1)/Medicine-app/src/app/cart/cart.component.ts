import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../Services/cart-service';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart';
import { Product } from '../product/product';
import { ProductComponent } from '../product/product.component';
import { MedAppService } from '../Services/med-app.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router, private product: MedAppService) { }
  ngOnInit(): void {
    this.getCart();
  }

  cart!: Cart;

  public getCart() {
    return this.cartService.getCart().subscribe((res: any) => {
      this.cart = res;
      console.log("inside get")
    })
  }

  public proceedToCheckout(price: any,cartId:String) {
    this.router.navigateByUrl(`/checkOut?price=${price}&id=${cartId}`);
  }
  public updateQuantity(id: String, proId: String, type: String) {
    return this.cartService.updateQuantity(id, proId, type).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    })

  }
  public removeProduct(userId: String, productId: String) {
    return this.cartService.deleteProductById(userId, productId).subscribe((res: any) => {
      alert("product removed successfully")
      this.getCart();
    })

  }

}
