import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./app/routes/app/Home";
import Error from "./components/errors/Error";
import MainLayout from "./components/layouts/MainLayout";
import Menu, { MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
