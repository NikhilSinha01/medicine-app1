import { Product } from "./product/product";

export interface OrderCart {
    cartId:String
    userId:String;
    prod:Product[];
    totalprice:number;
}
