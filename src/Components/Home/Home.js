import React, { useState, useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import AuthContext from "../../store/authContext";
import Chart from "../Chart/Chart";

const Home = () => {
  const [applications, setApplications] = useState([]);
  const { userId } = useContext(AuthContext);

  const getApplications = () => {
    axios
      .get(`/applications/${userId}`)
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div>
      <Chart data={applications} />
    </div>
  );
};

export default Home;
