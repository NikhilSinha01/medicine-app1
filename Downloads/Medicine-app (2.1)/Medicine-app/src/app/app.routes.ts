import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminSideBarComponent } from './AdminSideBar/admin-side-bar.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AddAdminProductsComponent } from './add-admin-products/add-admin-products.component';
import { authGuardGuard } from './auth-guard.guard';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';
import { UserOrderComponent } from './Admin-user-order/user-order.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuardGuard]
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'productDetails',
    component: ProductDetailsComponent
  },
  {
    path: 'checkOut',
    component: CheckOutComponent
  },
  {
    path: 'admin',
    component: AdminSideBarComponent,
    canActivate: [authGuardGuard],
    children:[
      {
        path: 'adminProducts',
        component: AdminProductsComponent
      },
      {
        path:'adminUser',
        component:AdminUserComponent
      },
      {
        path:'userEdit',
        component:AdminUserEditComponent
      },
      {
        path:'userOrder',
        component:UserOrderComponent
      },
      {
        path: 'addProduct',
        component: AddAdminProductsComponent
      },

    ]
  },
  
  {
    path: 'editProduct',
    component: AdminProductEditComponent
  },
 
  
  
 
];