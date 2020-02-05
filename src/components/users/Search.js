import React, { useState, useContext } from "react";
import GitHubContext from "../../context/github/gitHubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const gitHubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);
  const { users, clearUser } = gitHubContext;
  const [text, setText] = useState("");

  const handleChange = event => setText(event.target.value);

  const handleSearch = event => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert();
    } else {
      gitHubContext.searchUser(text);
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
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
