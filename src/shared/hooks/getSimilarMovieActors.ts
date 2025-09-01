import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export const getSimilarMovieActors = () =>
  api.get("genre/movie/list").then((res) => res.data.genres);

const getPopularMovies = (
  typePath: string,
  id: number,
  value: string,
  path?: string
) =>
  api
    .get(`${typePath}/${id}/${path}`)
    .then((res) => res.data[`${value}`] ?? []);

const fetchMoviesWithGenres = async (
  typePath: string,
  id: number,
  value: string,
  path?: string
) => {
  const [genres, movies] = await Promise.all([
    getSimilarMovieActors(),
    getPopularMovies(typePath, id, value, path),
  ]);

  const genreMap = Object.fromEntries(genres.map((g: any) => [g.id, g.name]));

  return movies.map((movie: any) => ({
    ...movie,
    genres: movie.genre_ids.map((id: any) => genreMap[id] || "Unknown"),
  }));
};

export const useSimilarMovieData = (
  typePath: string,
  id: number,
  value: string,
  path?: string
) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies-with-genres", typePath, id, value, path],
    queryFn: () => fetchMoviesWithGenres(typePath, id, value, path),
    enabled: !!id && !!path,
  });

  return { data, isLoading, isError, error };
};
