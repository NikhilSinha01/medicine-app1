import { Cart } from "./cart";
import { OrderCart } from "./order-cart";

export interface Order {

    orderId:String;
	emailId:String;
	billingAddress:String;
	billingPhone:String;
	 cart:OrderCart;
}
