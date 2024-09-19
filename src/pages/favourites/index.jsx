import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "./../../components/error/index";
import { Link } from "react-router-dom";
import { baseImgUrl } from "./../../utils/constants";
import { MdBookmarkRemove } from "react-icons/md";
import { toggleFavorite } from "./../../redux/actions/index";
const Favourites = () => {
  const dispatch = useDispatch();
  const { isLoading, error, favorites } = useSelector(
    (store) => store.favorites
  );
  const handleDelete = (movie) => {
    dispatch(toggleFavorite(movie, false));
  };
  if (isLoading) return <Loader />;

  if (error) return <Error info={error} />;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">İzleme Listesi</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-10">
        {favorites.map((movie) => (
          <div className="relative">
            <button
              onClick={() => handleDelete(movie)}
              className="absolute end-3 top-3 bg-blue-500 p-3 rounded hover:bg-blue-600 "
            >
              <MdBookmarkRemove />
            </button>
            <Link to={`/movie/${movie.id}`}>
              <img src={baseImgUrl + movie.poster_path} className="rounded" />
              <h1 className="text-xl text-center font-semibold mt-3">
                {movie.title}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
