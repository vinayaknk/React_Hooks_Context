import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  const usersList = (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

  return loading ? <Spinner /> : usersList;
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeate(2,1fr)",
  gridGap: "1rem"
};

export default Users;
