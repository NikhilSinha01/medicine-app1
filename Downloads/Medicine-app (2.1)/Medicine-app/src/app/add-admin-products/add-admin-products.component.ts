import { Component } from '@angular/core';
import { AdminProductsService } from '../Services/admin-products.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-admin-products',
  standalone: true,
  imports: [FormsModule, FooterComponent,CommonModule],
  templateUrl: './add-admin-products.component.html',
  styleUrl: './add-admin-products.component.css'
})
export class AddAdminProductsComponent {

  constructor(private add:AdminProductsService,private route:Router){}

  public addProduct(regdata:NgForm){
    if(regdata.valid){
     this.add.addAdminproduct(regdata.form.value).subscribe((res:any)=>{
        console.log(res);
        this.route.navigateByUrl('/admin/adminProducts')
        
    })
  }
  else{
    alert("please provide necessary fields")
  }
  }

  public editProducts(regdata: NgForm) {
    const id = regdata.value.id;
    return this.add.editProductById(id, regdata.value).subscribe((res: any) => {

      console.log(id)
      console.log(regdata);

    })

  }
}
