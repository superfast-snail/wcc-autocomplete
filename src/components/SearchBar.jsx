import { useState, useRef } from "react";
import SearchIcon from "../icons/SearchIcon";
import MovieIcon from "../icons/MovieIcon";
import SuggestionsBar from "./SuggestionsBar";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isPending, setIsPending] = useState(false);

  const inputElement = useRef(null);

  return (
    <div className="search">
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <MovieIcon size="30" fill="#fff" />
          <input
            className="search-input"
            ref={inputElement}
            type="text"
            placeholder="Enter movie name"
            onChange={(e) => {
              setIsPending(true);
              setSearchInput(e.target.value);
            }}
          />
          {searchInput.length > 2 && (
            <SuggestionsBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              isPending={isPending}
              setIsPending={setIsPending}
              inputElement={inputElement}
            />
          )}
        </div>
      </div>
      <div className="search-button-container">
        <SearchIcon />
        <input id="submit" />
      </div>
    </div>
  );
};

export default SearchBar;
