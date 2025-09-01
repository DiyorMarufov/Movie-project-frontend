import { memo, useState } from "react";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useFullMovieData } from "../../shared/hooks/getGenres";
import { Input } from "antd";
import { useDebounce } from "../../shared/hooks/useDebounce";

const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 1000);
  const { data, isLoading } = useFullMovieData("search", {
    query: debouncedValue,
  });
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="w-[500px] pt-5">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {data?.length > 0 ? (
        <MovieView className="pt-10" data={data} isLoading={isLoading} />
      ) : (
        <div className="h-[43vh] flex items-center justify-center">
          <div className="text-[30px]">
            <h1>Search movie...</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(SearchMovie);
