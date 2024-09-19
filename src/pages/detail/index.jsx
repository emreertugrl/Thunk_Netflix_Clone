import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./../../utils/api/index";
import Error from "./../../components/error/index";
import Loader from "./../../components/loader/index";
import Banner from "./Banner";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import Button from "./Button";
import { IoCaretBack } from "react-icons/io5";
const Detail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  console.log(movie);
  // burada append_to_response  ile ek parametreler ekleyebiliyoruz soldaki menüden seçilerek eklenir.
  useEffect(() => {
    const params = { append_to_response: "credits,videos" };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);
  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;
  return (
    <div>
      <div className="mb-5 flex justify-between ">
        <Link
          to=".."
          className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition flex gap-2 items-center "
        >
          <IoCaretBack className="text-xl" /> <span>Geri</span>
        </Link>
        {/* izleme listesi butonu */}
        <Button movie={movie} />
        {/* üst resim alanı */}
      </div>
      <Banner movie={movie} />
      {/* orta içerik alanı */}
      <Content movie={movie} />
      {/* Oyuncu listesi */}
      <ActorList actors={movie.credits.cast} />
      {/* Fragman listesi */}
      <VideoList videos={movie.videos.results} />
    </div>
  );
};

export default Detail;
