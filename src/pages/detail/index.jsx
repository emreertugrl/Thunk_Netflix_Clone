import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./../../utils/api/index";
import Error from "./../../components/error/index";
import Loader from "./../../components/loader/index";
import Banner from "./Banner";
import Content from "./Content";
const Detail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  // burada append_to_response  ile ek parametreler ekleyebiliyoruz soldaki menüden seçilerek eklenir.
  useEffect(() => {
    const params = { append_to_response: "videos%2Ccredits" };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err));
  }, []);
  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;
  return (
    <div>
      {/* üst resim alanı */}
      <Banner movie={movie} />
      {/* orta içerik alanı */}
      <Content movie={movie} />
    </div>
  );
};

export default Detail;
