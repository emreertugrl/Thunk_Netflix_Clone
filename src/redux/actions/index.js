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
// favorilerdeki filmleri al
export const getFavorite = () => (dispatch) => {
  dispatch({ type: ActionTypes.FAV_LOADING });
  api
    .get(`account/21379021/favorite/movies`)
    .then((res) =>
      dispatch({ type: ActionTypes.FAV_SUCCESS, payload: res.data.results })
    )
    .catch((err) => dispatch({ type: ActionTypes.FAV_ERROR, payload: err }));
};
// favorilere ekle
export const toggleFavorite = (movie, isAdd) => (dispatch) => {
  api
    .post(`/account/19719088/favorite`, {
      media_type: "movie",
      media_id: movie.id,
      favorite: isAdd,
    })
    .then(() =>
      // isAdd true ise api'ye ekleme , değilse çıkarma yapılır.
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_FAV, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FAV, payload: movie })
    )
    .catch((err) => console.log(err.message));
};
