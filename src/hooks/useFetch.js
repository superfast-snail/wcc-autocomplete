import { useState } from "react";
import { useDebouncedEffect } from "./useDebouncedEffect";

const apiKey = "b90c763c97ae2629264bd26680f7e812";

const useFetch = (searchInput, setIsPending) => {
  const [suggestions, setSuggestions] = useState([]);

  useDebouncedEffect(
    () => {
      if (searchInput) {
        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((apiResponse) => {
            if (!apiResponse.results && !apiResponse.sucess) {
              throw new Error(apiResponse.status_message);
            }
            if (apiResponse.results) {
              setSuggestions(
                apiResponse.results.slice(0, 8).map((element) => {
                  return {
                    title: element.title,
                    rating: element.vote_average,
                    year: element.release_date
                      ? new Date(element.release_date).getFullYear()
                      : "Date not Specified",
                  };
                })
              );
              setIsPending(false);
            }
          })
          .catch((error) => {
            setIsPending(false);
            console.log(error);
          });
      }
    },
    500,
    [searchInput]
  );
  return { suggestions };
};

export default useFetch;
