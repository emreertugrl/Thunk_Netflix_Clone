import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // params: { language: "tr" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGI1N2M4ODIzN2MxMTZhOTU0MWI1MTNmNzU1YTg2MCIsIm5iZiI6MTcyNTQzNzExOS4xNTMzMzcsInN1YiI6IjY2OTE2OWFiY2U1YjE5YjNlZjQzZGJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R70Az33Xpl6UzQkuIkb3gjbV6t_3fLYX19MM2TnQiFQ",
  },
});

export default api;
