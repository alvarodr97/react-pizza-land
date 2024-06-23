import { CartAPI, CartI } from "./cart";

export interface OrderI {
  customer: string;
  phone: string;
  address: string;
  cart: CartI[];
  position: string;
  priority: boolean;
}

export interface OrderAPI {
  customer: string;
  phone: string;
  position: string;
  address: string;
  status: string;
  priority: boolean;
  cart: CartAPI[];
  id: string;
  createdAt: Date;
  estimatedDelivery: Date;
  orderPrice: number;
  priorityPrice: number;
}
