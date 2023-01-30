import React, { useContext } from "react";
import AuthContext from "../../store/authContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {authCtx.token ? (
        <div>
          <button onClick={() => authCtx.logout()}>logout</button>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/applicationForm">New Application</NavLink>
          <NavLink to="/">Home</NavLink>
        </div>
      ) : (
        <div>
        <NavLink to="/login">Login </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
