import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const Movie = lazy(() => import("../pages/movie"));
const MovieDetail = lazy(() => import("../pages/movie-detail"));
const Cast = lazy(() => import("../pages/movie-detail/pages/cast"));
const Crew = lazy(() => import("../pages/movie-detail/pages/crew"));
const ActorDetail = lazy(() => import("../pages/actor-detail"));
const SearchMovie = lazy(() => import("../pages/search-movie"));
const FavoriteMovie = lazy(() => import("../pages/favorite-movie"));

const AppRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "movie", element: <Movie /> },
        { path: "search-movie", element: <SearchMovie /> },
        { path: "favorite-movie", element: <FavoriteMovie /> },

        {
          path: "movie/:id",
          element: <MovieDetail />,
          children: [
            { index: true, element: <Cast /> },
            { path: "crew", element: <Crew /> },
          ],
        },
        { path: "actor/:id", element: <ActorDetail /> },
      ],
    },
  ]);
};

export default memo(AppRouters);
