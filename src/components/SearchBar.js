import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState("");

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  const whenFormIsSubmited = (event) => {
    event.preventDefault();

    onFormSubmit(text);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={whenFormIsSubmited} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={text} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
