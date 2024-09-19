import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "../../utils/constants";

const ActorList = ({ actors }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl">Oyuncular</h2>
      <Splide
        options={{
          autoWidth: true,
          gap: "10px",
          pagination: false,
        }}
      >
        {actors.map((actor) => (
          <SplideSlide key={actor.id}>
            <div className="w-40 h-full ">
              <img
                className="rounded w-full h-[90%] object-cover"
                src={
                  actor.profile_path
                    ? baseImgUrl + actor.profile_path
                    : "/default.webp"
                }
              />
              <p
                className={`text-center fw-bold ${
                  actor.gender == 2
                    ? "bg-blue-500"
                    : actor.gender == 1
                    ? "bg-red-500"
                    : "bg-gray-500"
                } `}
              >
                {actor.original_name}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ActorList;
