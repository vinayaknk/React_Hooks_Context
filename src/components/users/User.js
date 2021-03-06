import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import GitHubContext from "../../context/github/gitHubContext";

const User = ({ match }) => {
  const gitHubContext = useContext(GitHubContext);
  const { loading, user, getSingleUser } = gitHubContext;
  useEffect(() => {
    console.log("params ", match.params.login);
    getSingleUser(match.params.login); // login == userName
    //eslint-disable-next-line
  }, []);

  const { name, avatar_url, location, bio, html_url, hireable } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Home Page
      </Link>
      Hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "150px" }}
            alt=""
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3> <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            View GitHUb Profile
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
