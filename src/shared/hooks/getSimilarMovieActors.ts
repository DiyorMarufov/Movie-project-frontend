import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export const getSimilarMovieActors = () =>
  api.get("genre/movie/list").then((res) => res.data.genres);

const getPopularMovies = (id: number, path: string) =>
  api.get(`person/${id}/${path}`).then((res) => res.data.results);

const fetchMoviesWithGenres = async (id: number, path: string) => {
  const [genres, movies] = await Promise.all([
    getSimilarMovieActors(),
    getPopularMovies(id, path),
  ]);

  const genreMap = Object.fromEntries(genres.map((g: any) => [g.id, g.name]));

  return movies.map((movie: any) => ({
    ...movie,
    genres: movie.genre_ids.map((id: any) => genreMap[id] || "Unknown"),
  }));
};

export const useFullMovieData = (id: number, path: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies-with-genres", id, path],
    queryFn: () => fetchMoviesWithGenres(id, path),
    enabled: !!id && !!path,
  });

  return { data, isLoading, isError, error };
};
