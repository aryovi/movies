import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h2>{user ? `Hello ${user.name}` : "Welcome@"}</h2>
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={logout}>
            {"Sign out "}
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            {"Sign in"}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
