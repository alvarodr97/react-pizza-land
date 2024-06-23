import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../shared/store/store";
import { getCart, getTotalCartPrice } from "../features/cart/cartSlice";

export function useCreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state: RootState) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  return {
    withPriority,
    setWithPriority,
    username,
    addressStatus,
    position,
    address,
    errorAddress,
    isLoadingAddress,
    cart,
    totalCartPrice,
    priorityPrice,
    totalPrice,
  };
}
