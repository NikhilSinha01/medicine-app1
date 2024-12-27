import { Component } from '@angular/core';
import { AdminProductsService } from '../Services/admin-products.service';
import { AdminProducts } from '../admin-products';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { statSync } from 'fs';
import { Product } from '../product/product';
import { FormsModule,NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {
status: boolean=true;
prod!:Product;
deleteid:any;

  constructor(private router: Router, private adminProduct: AdminProductsService,private modalService: NgbModal) { }

  product: AdminProducts[] = [];

  ngOnInit(): void {
    this.getAdminProducts();
  }

  public getAdminProducts() {
    return this.adminProduct.getAllProducts().subscribe((res: any) => {
      this.product = res;
    })
  }

  editProduct(productid: String) {
    console.log(productid);
    // this.router.navigateByUrl('/editProduct', { state: { id: productid } });
    // // this.router.navigate([‘/pizza/’],{ queryParams: { order:’popular’ } });
    this.status=false;
    this.adminProduct.getProductById(productid).subscribe((res: any) => {
      console.log(res);
      this.prod = res;
    })
  }
  addProduct(){
    this.router.navigateByUrl('/admin/addProduct');
  }

  public editProducts(regdata: NgForm) {
    if(regdata.valid){
    const id = regdata.value.productId;
    console.log(id)
      console.log(regdata);
     this.adminProduct.editProductById(id, regdata.value).subscribe((res: any) => {
      this.ngOnInit();

     
     })
     alert("product Edited Successfully")
     this.status=true;
    }
    else{
      alert("please filled necessary field")
    }
     
      }

      public deleteProduct(id:String){
        return this.adminProduct.deleteAdminProduct(id).subscribe((res:any)=>{
          alert("product deleted successfully")
          this.modalService.dismissAll();
          this.ngOnInit()
        })
      }
      openDelete(targetModal: any, friend: AdminProducts) {
        this.deleteid = friend.productId;
        this.modalService.open(targetModal, {
          backdrop: 'static',
          size: 'lg'
        });
      }
}


