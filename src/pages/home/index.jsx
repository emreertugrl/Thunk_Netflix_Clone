import { useSelector } from "react-redux";
import Hero from "./Hero";
import Error from "../../components/error";
import Loader from "../../components/loader";
import MovieList from "./MovieList";

const Home = () => {
  const { genres, error, isLoading } = useSelector((store) => store.genres);
  // console.log(genres);

  return (
    <div>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default Home;
