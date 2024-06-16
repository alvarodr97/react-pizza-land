import { useLoaderData } from "react-router-dom";
import { PizzaApiI } from "../../types/api-restaurant-type";
import { getMenu } from "../../lib/api-restaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData() as PizzaApiI[];

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function MenuLoader() {
  const menu: PizzaApiI[] = await getMenu();
  return menu;
}

export default Menu;
