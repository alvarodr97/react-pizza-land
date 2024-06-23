import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./app/routes/app/Home";
import Error from "./components/errors/Error";
import MainLayout from "./components/layouts/MainLayout";
import Menu, { MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/actions/create-order-action";
import { action as updateOrderAction } from "./features/order/actions/update-order-action";
import Order, { loader as orderLoader } from "./features/order/Order";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
