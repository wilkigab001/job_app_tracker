import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../store/authContext";
import axios from "axios";

const ApplicationForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [hiringManager, setHiringManager] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [company, setCompany] = useState("");
  const [rejected, setRejected] = useState(false);
  const { userId, token } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(rejected)
    console.log(userId)

    axios.post(
      `/adding/${userId}`,
      {
        jobTitle,
        year,
        month,
        hiringManager,
        jobLink,
        company,
        rejected,
        userId,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={jobTitle}
          placeholder="Job Title"
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="number"
          value={year}
          placeholder="Year of Application"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          value={month}
          placeholder="Month of Application"
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="text"
          value={hiringManager}
          placeholder="Hiring Manager"
          onChange={(e) => setHiringManager(e.target.value)}
        />
        <input
          type="text"
          value={jobLink}
          placeholder="Job Link"
          onChange={(e) => setJobLink(e.target.value)}
        />
        <input
          type="text"
          value={company}
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="radio"
          id="true-button"
          name="true-false"
          value="true"
          onChange={(e) => setRejected(e.target.value)}
        />{" "}
        True{" "}
        <input
          type="radio"
          id="false-button"
          name="true-false"
          value="false"
          onChange={(e) => setRejected(e.target.value)}
        />{" "}
        False <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
