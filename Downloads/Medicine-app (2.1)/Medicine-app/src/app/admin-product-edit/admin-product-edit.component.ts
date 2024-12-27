import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from '../Services/admin-products.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EditProducts } from '../edit-products';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-product-edit.component.html',
  styleUrl: './admin-product-edit.component.css'
})
export class AdminProductEditComponent {
  productId!: any;

  prod!: EditProducts;


  constructor(private adminProd: AdminProductsService, private router: Router, private route: ActivatedRoute) { }


  // ngOnInit(): void {

  //   this.productId = this.route.snapshot.paramMap.get('id');
  //   console.log(this.route.snapshot.params); // Check params object
  //   console.log(this.route.snapshot.data); // Check data object

  //   this.route.paramMap.subscribe(params => {
  //     this.productId = params.get('id');
  //     console.log(params); // Check paramMap object after subscription
  //   })
  //   alert(this.productId);
  // }

  public editProduct(regdata: NgForm) {
    const id = regdata.value.id;
    return this.adminProd.editProductById(id, regdata.value).subscribe((res: any) => {

      console.log(id)
      console.log(regdata);

    })

  }


  public getProductById(productId: string) {
    return this.adminProd.getProductById(productId).subscribe((res: any) => {
      console.log(res);
      this.prod = res;
    })
  }

  

}
