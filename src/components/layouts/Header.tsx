import { Link } from "react-router-dom";
import Username from "../../features/user/Username";
import SearchOrder from "../../features/order/SearchOrder";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-sm tracking-widest sm:text-base">
        Pizza Land
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}
