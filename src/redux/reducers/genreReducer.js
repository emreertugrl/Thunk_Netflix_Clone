import ActionTypes from "./../actionTypes";

const initialState = {
  genres: [],
  isLoading: true,
  error: null,
};

const genreReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionTypes.GENRE_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.GENRE_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ActionTypes.GENRE_SUCCESS:
      return { isLoading: false, error: null, genres: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
