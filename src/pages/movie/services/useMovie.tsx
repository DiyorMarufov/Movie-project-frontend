import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const movieKey = "movieKey";

export const useMovie = () => {
  const getMovies = () =>
    useQuery({
      queryKey: [movieKey],
      queryFn: () => api.get("discover/movie").then((res) => res.data),
    });

  const getChosenMovies = (path: string) =>
    useQuery({
      queryKey: [movieKey, path],
      queryFn: () => api.get(`movie/${path}`).then((res) => res.data),
    });

  const getMovieById = (id: string) =>
    useQuery({
      queryKey: [movieKey, id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });

  const getMovieItems = (id: string, path: string) =>
    useQuery({
      queryKey: [movieKey, id, path],
      queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
    });

  return { getMovies, getChosenMovies, getMovieById, getMovieItems };
};
