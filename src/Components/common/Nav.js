import {Link} from "react-router-dom"
import Profile from "./../Profile/Profile"
import Login from "./../Login/Login"

import "./Nav.css"

const Nav = () => {

  return (
    <>
     <div className="container-nav">
        <Profile />
        <Login />
      </div>
    </>
  );
};







export default Nav;