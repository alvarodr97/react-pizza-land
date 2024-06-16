import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "../ui/Loader";
import CartOverview from "../../features/cart/CartOverview";

export default function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-x-4">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
