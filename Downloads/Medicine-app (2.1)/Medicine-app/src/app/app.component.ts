import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ProductComponent,SignUpComponent,CommonModule,CartComponent,AdminProductsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Medicine-app';
  constructor(private router:Router){}

  isInAdminRoute(): boolean {
   
    return this.router.url.startsWith('/admin');
  }
}
