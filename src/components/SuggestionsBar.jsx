import { useRef } from "react";
import { SuggestionItem, SuggestionItemError } from "./SuggestionItem";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import MovieIcon from "../icons/MovieIcon";

const SuggestionsBar = (props) => {
  const suggestionsElement = useRef(null);
  const { suggestions } = useFetch(props.searchInput, props.setIsPending);
  const suggestionItems =
    suggestions?.length > 0 ? (
      suggestions.map((item, i) => (
        <SuggestionItem
          key={i}
          title={item.title}
          rating={item.rating}
          year={item.year}
          searchInputRef={props.inputElement}
          suggestionsInputRef={suggestionsElement}
        />
      ))
    ) : (
      <SuggestionItemError />
    );

  return (
    <div className="search-autocomplete-box" ref={suggestionsElement}>
      <ul>
        <li>
          <div>
            <h1>
              <form>
                <MovieIcon size="25" fill="#000" />
                <input
                  type="text"
                  value={props.searchInput}
                  onChange={(e) => props.setSearchInput(e.target.value)}
                />
              </form>
            </h1>
          </div>
          <h4>Enter a movie name</h4>
        </li>
        {props.isPending ? <Loader /> : suggestionItems}
      </ul>
    </div>
  );
};

export default SuggestionsBar;
