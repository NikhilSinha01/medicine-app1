import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {

  constructor(private http:HttpClient) { }
  public getAllProducts(){
    return this.http.get('http://localhost:2020/product');
  }
  public editProductById(id:String,prodts:any){
    return this.http.put('http://localhost:2020/product/update/'+id,prodts);
  }
  public getProductById(id:String){
    return this.http.get('http://localhost:2020/product/'+id);
  }

  public addAdminproduct(product:any){
    return this.http.post('http://localhost:2020/product',product)
  }
  public deleteAdminProduct(id:String){
    return this.http.delete('http://localhost:2020/product/'+id);
  }

}
