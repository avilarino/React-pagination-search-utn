import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

import "./Profile.css"

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

  return (
    isAuthenticated && (
      <div className="container-profile d-flex">
        <div className="container-avatar">
          <img className="avatar" src={user.picture} alt={user.name} />
        </div>
       
        <div>
          <h2 className="title-profile">{user.name}</h2>
          <p className="mail-profile">{user.email}</p>
        </div> 
      </div>
    )
  );
};

export default Profile;