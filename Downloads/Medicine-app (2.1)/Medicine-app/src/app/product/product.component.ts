import { Component, OnInit } from '@angular/core';
import { MedAppService } from '../Services/med-app.service';
import { Product } from '../product/product'
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart-service';
import {Router} from '@angular/router';
import { AuthService } from '../Services/AuthService';
import { stringify } from 'querystring';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DialogService } from '../Services/dialog.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: MedAppService, private cartService: CartService,private router:Router,private authService:AuthService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.product();
   
    

  }

  public product() {
    this.productService.getProduct().subscribe((res: any) => {
      this.products = res;
      console.log(this.products);

    }
    )
  }

  
  addToCartbyBotton(productId: string) {
  
    this.productService.productById(productId).subscribe((res:any)=>{
      this.products=res;
    })
    
    const userId = this.authService.getUserId(); //local storage
    console.log('My id',userId);
    const cartItemRequest = {
      "productId": productId,
      "userId": userId,
      
    }
    console.log(productId);
    console.log(userId);
    this.cartService.addToCart(cartItemRequest).subscribe((res:any) => {
      console.log("navigating")
      this.router.navigateByUrl('/cart')
     
 
    })
    
  }

  public getProductDetails(id:String){
    this.productService.productById(id).subscribe((res: any) => {
      this.products=res;
      console.log("Product loaded", res);

    })
  }
 
  public openDialog(data:any): void {    
    this.dialog.open(ProductDetailsComponent, {
      width: '500px',
       height:'500px',
      data:data
    });
  }
}

