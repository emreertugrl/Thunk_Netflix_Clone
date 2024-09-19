import { IoCaretBack } from "react-icons/io5";
import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../../redux/actions";

const Button = ({ movie }) => {
  const { favorites } = useSelector((store) => store.favorites);

  const dispatch = useDispatch();

  // ekrana basılan film favorilerde var mı ?
  const isFav = favorites.find((f) => f.id === movie.id);

  // favoride varsa ikinci parametre false yoksa true olmalı
  const handleClick = () => {
    dispatch(toggleFavorite(movie, !isFav));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition flex gap-2 items-center"
    >
      {isFav ? (
        <>
          <MdBookmarkRemove className="text-xl" />
          <span>İzleme Listesinden Çıkar</span>
        </>
      ) : (
        <>
          <MdBookmarkAdd className="text-xl" />
          <span>İzleme Listesine Ekle</span>
        </>
      )}
    </button>
  );
};

export default Button;
