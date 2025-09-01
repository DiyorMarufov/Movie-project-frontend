import { memo, useEffect, useState, type ChangeEvent } from "react";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useFullMovieData } from "../../shared/hooks/getGenres";
import { Input } from "antd";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { useParamsHooks } from "../../shared/hooks/useParams";

const SearchMovie = () => {
  const { getParam, setParam, removeParam } = useParamsHooks();
  const initialSearch = getParam("search") || "";
  const [searchInput, setSearchInput] = useState(initialSearch);

  const debouncedValue = useDebounce(searchInput, 1000);
  const { data, isLoading } = useFullMovieData("search", {
    query: debouncedValue,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      setParam("search", debouncedValue);
    } else {
      removeParam("search");
    }
  }, [debouncedValue]);

  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="w-full flex justify-center pt-5">
        <Input
          placeholder="Search..."
          value={searchInput}
          onChange={handleChange}
          className="max-w-[500px]!"
        />
      </div>
      {data?.length > 0 ? (
        <MovieView className="pt-10" data={data} isLoading={isLoading} />
      ) : (
        <div className="h-[43vh] flex items-center justify-center">
          <div className="text-[30px] max-[600px]:text-[25px]">
            <h1>Search movie...</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(SearchMovie);
