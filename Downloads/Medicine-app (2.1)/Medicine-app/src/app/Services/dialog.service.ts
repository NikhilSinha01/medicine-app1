import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductDetailsComponent } from '../product-details/product-details.component';
import { title } from 'process';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { 
  }

  openDialog(): void {
    this.dialog.open(ProductDetailsComponent, {
      width: '500px',
       height:'500px',
      data:{ 
        title:"title"
       
       }
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  
}
