import api from "../../utils/api";
import ActionTypes from "./../actionTypes";
// kategori verilerini alıp reducer'a bildiren thunk aksiyonu
export const getGenres = () => (dispatch) => {
  // yüklenmenin başladığını reducer'a bildirir
  dispatch({ type: ActionTypes.GENRE_LOADING });
  //   apiden kategorileri isteriz
  api
    .get(`/genre/movie/list`, { params: { language: "tr" } })
    // başarılı olursa reducer'a veriyi haber ver
    .then((res) =>
      dispatch({ type: ActionTypes.GENRE_SUCCESS, payload: res.data.genres })
    )
    // başarısız olursa reducer'a hatayı haber ver

    .catch((err) =>
      dispatch({ type: ActionTypes.GENRE_ERROR, payload: err.message })
    );
};
