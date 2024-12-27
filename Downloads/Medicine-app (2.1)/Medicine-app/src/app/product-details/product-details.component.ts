import { Component, Inject } from '@angular/core';
import { MedAppService } from '../Services/med-app.service';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { DialogService } from '../Services/dialog.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  data:any = "";
    constructor(
      private productDetails:MedAppService, 
      private dialog:DialogService,
      @Inject(MAT_DIALOG_DATA) data:any
    ){      
      this.data = data;      
    }

    produ:Product[]=[];
    public getProductDetails(id:String){
      this.productDetails.productById(id).subscribe((res: any) => {
        this.produ=res;
  
      })

     
    }

    close(): void {
      this.dialog.closeDialog();
    }


   

}
