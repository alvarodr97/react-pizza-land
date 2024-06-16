import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../components/ui/Button";

export default function DeleteCartItem({ pizzaId }: { pizzaId: number }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
