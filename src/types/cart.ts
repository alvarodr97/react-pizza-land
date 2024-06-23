/* eslint-disable @typescript-eslint/no-explicit-any */
import { PizzaItemI } from "./pizza";

export interface CartI {
  cart: PizzaItemI[];
}

export interface CartAPI {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addIngredients: any[];
  removeIngredients: any[];
}
