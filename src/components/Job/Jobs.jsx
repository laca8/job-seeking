import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([{
    title:"Web Developer",
    category:"Frontend",
    "country":"Egypt",
    "city":"Cairo",
    "location":"Cairo,Egypt",
    "description":"Experienced [Job Title] with background in creating custom websites using advanced HTML, CSS and JavaScript skills.",
    "jobPostedOn":"After 1 Month"
  },{
    title:"Web Developer",
    category:"Backend",
    "country":"Egypt",
    "city":"Cairo",
    "location":"Cairo,Egypt",
    "description":"Experienced [Job Title] with background in creating custom websites using advanced HTML, CSS and JavaScript skills.",
    "jobPostedOn":"After 1 Month"
  }]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
 


  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs &&
            jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
