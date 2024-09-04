import List from "./List";

const Content = ({ movie }) => {
  console.log(movie);
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <List title="Kategoriler" arr={movie.genres} />
        <List title="Konuşulan Diller" arr={movie.spoken_languages} />
        <List title="Yapımcı şirketler" arr={movie.production_companies} />
        <List title="Yapımcı Ülkeler" arr={movie.production_countries} />
      </div>
      <div>İçerik 2 </div>
    </div>
  );
};

export default Content;
