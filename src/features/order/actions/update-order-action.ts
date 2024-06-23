import { Params } from "react-router-dom";
import { updateOrder } from "../../../lib/api-restaurant";

export async function action({ params }: { params: Params }) {
  if (!params.orderId) throw Error("Couldn't update order");

  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
