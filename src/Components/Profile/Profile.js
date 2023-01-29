import React, { useState, useContext, useEffect } from "react";
import ApplicationMapper from "../ApplicationMapper/ApplicationMapper";
import axios from "axios";
import AuthContext from "../../store/authContext";

const Profile = () => {
  const { userId } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications();
  }, []);

  const getApplications = () => {
    axios
      .get(`applications/${userId}`)
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      Profile
      {applications.map((application) => {
        return (
          <ApplicationMapper key={application.id} application={application} />
        );
      })}
    </div>
  );
};

export default Profile;
