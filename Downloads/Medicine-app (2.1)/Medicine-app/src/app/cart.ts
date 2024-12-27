import { Product } from "./product/product";
export interface Cart {
    cartId:String
    userId:String;
    prod:Product[];
    totalprice:number;

}
