import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById } from "./cartSlice";
import { PizzaItemI } from "../../types/pizza";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";
import DeleteCartItem from "./DeleteCartItem";

function CartItem({ item }: { item: PizzaItemI }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateCartItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />

        <DeleteCartItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
