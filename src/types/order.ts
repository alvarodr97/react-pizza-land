import { CartI } from "./cart";

export interface OrderI {
  customer: string;
  phone: string;
  address: string;
  cart: CartI[];
  position: string;
  priority: boolean;
}
