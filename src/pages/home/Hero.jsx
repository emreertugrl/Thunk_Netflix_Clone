import React, { useEffect, useState } from "react";
import api from "./../../utils/api/index";
import Error from "./../../components/error/index";
import Loader from "./../../components/loader/index";
import { baseImgUrl } from "./../../utils/constants";
const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  // console.log("hero render");// 2 kez renderlanmasını sağladık normalde 4 kez render yapılıyordu.
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        // dizinin uzunluğu kadar rastgele bir sayı seç
        const movies = res.data.results;
        const i = Math.floor(Math.random() * movies.length);
        // popüler filmlerden oluşan diziden rastgele bir eleman seçme
        setMovie(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;

  return (
    <div className="grid md:grid-cols-2 md:max-h-[400px] mb-10 gap-5">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview}</p>
        <p>
          <span>IMDB:</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(2)}
          </span>
        </p>
        <div className="flex gap-5">
          <button className="p-2 bg-red-600 rounded transition hover:bg-red-700">
            Filmi İzle
          </button>
          <button className="p-2 bg-blue-600 rounded transition hover:bg-blue-700">
            Listeye Ekle
          </button>
        </div>
      </div>
      <div>
        <img
          src={baseImgUrl + movie.backdrop_path}
          alt="movie"
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default React.memo(Hero);
