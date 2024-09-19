import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";

const VideoList = ({ videos }) => {
  //eğer ki filmin frahmanları yoksa bu bileşeni renderlamaz
  if (!videos) return;
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl">Fragmanlar</h2>
      <Splide options={{ pagination: false }}>
        {videos.map((video, i) => (
          <SplideSlide key={i}>
            <div className="w-full h-[30vh] md:h-[50vh]">
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${video?.key}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default VideoList;
