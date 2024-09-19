import { IoBookmarks } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10 flex gap-2 items-center justify-between">
      <Link to="/">
        <img src="/netflix_logo.svg" alt="netflix" className="max-w-[150px]" />
      </Link>

      <Link
        to="/watch-list"
        className="flex  gap-2 items-center hover:text-yellow-400 text-lg transition"
      >
        <IoBookmarks /> İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
