export const SuggestionItem = (props) => {
  const onSuggestionClick = (e) => {
    switch (e.target.localName) {
      case "h1":
        props.searchInputRef.current.value = e.target.innerText;
        break;
      case "h4":
        props.searchInputRef.current.value =
          e.target.parentElement.firstChild.innerText;
        break;
      default:
        props.searchInputRef.current.value = e.target.firstChild.innerText;
    }
    props.suggestionsInputRef.current.style.display = "none";
  };

  return (
    <li onClick={onSuggestionClick}>
      <h1>{props.title}</h1>
      <h4>
        {props.rating} Rating, {props.year}
      </h4>
    </li>
  );
};

export const SuggestionItemError = () => {
  return (
    <li style={{ cursor: "default" }}>
      <h4>No suggestions found :(</h4>
    </li>
  );
};
