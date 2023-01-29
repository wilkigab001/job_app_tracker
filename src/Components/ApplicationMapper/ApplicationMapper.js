import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../store/authContext";

const ApplicationMapper = ({application}) => {
console.log(application)
console.log(application.rejected)
const [rejected,setRejected] = useState(application.rejected)

  return <div>ApplicationMapper
    <ul>
        <li>{application.company} company
        </li>
        <li> Applied in {application.month}/ {application.year}</li>
        <li>Job title {application.jobTitle}</li>
        <li>Rejected? {rejected?  'Yes' : 'No'}</li>
        <li>Hiring Manager: {application.hiringManager}</li>
        </ul>
  </div>;
};

export default ApplicationMapper;
