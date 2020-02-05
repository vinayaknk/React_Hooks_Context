import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GitHubContext from "../../context/github/gitHubContext";

const Users = () => {
  const gitHubContext = useContext(GitHubContext);
  const { users, loading } = gitHubContext;
  const usersList = (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

  return loading ? <Spinner /> : usersList;
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeate(2,1fr)",
  gridGap: "1rem"
};

export default Users;
