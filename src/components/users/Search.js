import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUser, clearUser, setAlert, users }) => {
  const [text, setText] = useState("");

  const handleChange = event => setText(event.target.value);

  const handleSearch = event => {
    event.preventDefault();
    if (text === "") {
      setAlert();
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSearch}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search users..."
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary btn-block"
        />
      </form>
      {users.length <= 0 ? null : (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Search;
