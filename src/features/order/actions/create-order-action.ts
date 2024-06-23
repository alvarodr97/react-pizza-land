import { redirect } from "react-router-dom";
import { store } from "../../../shared/store/store";
import { clearCart } from "../../cart/cartSlice";
import { createOrder } from "../../../lib/api-restaurant";
import { OrderI } from "../../../types/order";
import { isValidPhone } from "../../../utils/helpers";

interface FormCreateOrder {
  customer: string;
  phone: string;
  address: string;
  position: string;
  priority: string;
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as FormCreateOrder;

  const order: OrderI = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    cart: JSON.parse(formData.get("cart") as string),
    position: data.position as string,
    priority: data.priority === "on",
  };

  const errors: Record<string, string> = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
