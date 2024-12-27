import { Product } from "./product/product";

export interface CartCheckOut {
    cartId:String
    userId:String;
    prod:Product[];
    totalprice:number;
}
