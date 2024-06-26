import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([{
    title:"Web Developer",
    category:"Programmer",
    "country":"Egypt",
    "city":"Cairo",
    "location":"Cairo,Egypt",
    "description":"Experienced [Job Title] with background in creating custom websites using advanced HTML, CSS and JavaScript skills.",
    "jobPostedOn":"After 1 Month"
  },{
    title:"Web Developer",
    category:"Programmer",
    "country":"Egypt",
    "city":"Cairo",
    "location":"Cairo,Egypt",
    "description":"Experienced [Job Title] with background in creating custom websites using advanced HTML, CSS and JavaScript skills.",
    "jobPostedOn":"After 1 Month"
  }]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

 

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
  
        <div className="container">
          <h1>My Applications</h1>
        
            applications.map((element) => {
              return (
                <JobSeekerCard
                  element={element}
                  key={element._id}
                  deleteApplication={deleteApplication}
                  openModal={openModal}
                />
              );
            })
          )}
        </div>
        <div className="container">
          <h1>Applications From Job Seekers</h1>
        
            applications.map((element) => {
              return (
                <EmployerCard
                  element={element}
                  key={element._id}
                  openModal={openModal}
                />
       
            })
          )}
        </div>
      )}
      {modalOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <>
      <div className="job_seeker_card">
        <div className="detail">
           <p>
            <span>Name:</span> {"Ahmed Ragab"}
          </p>
          <p>
            <span>Email:</span> {"laca@gmail.com"}
          </p>
          <p>
            <span>Phone:</span> {"01140331005"}
          </p>
          <p>
            <span>Address:</span> {"cairo"}
          </p>
          <p>
            <span>CoverLetter:</span> {"Experienced [Job Title] with background in creating custom websites using advanced HTML, CSS and JavaScript skills."}
          </p>
        </div>
        <div className="resume">
          <img
            src={element.resume.url}
            alt="resume"
            onClick={() => openModal(element.resume.url)}
          />
        </div>
        <div className="btn_area">
          <button onClick={() => deleteApplication(element._id)}>
            Delete Application
          </button>
        </div>
      </div>
    </>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <>
      <div className="job_seeker_card">
        <div className="detail">
          <p>
            <span>Name:</span> {"Ahmed Ragab"}
          </p>
          <p>
            <span>Email:</span> {"laca@gmail.com"}
          </p>
          <p>
            <span>Phone:</span> {"01140331005"}
          </p>
          <p>
            <span>Address:</span> {"cairo"}
          </p>
          <p>
            <span>CoverLetter:</span> {"Experienced [Job Title] with background in creating custom websites using advanced HTML, CSS and JavaScript skills."}
          </p>
        </div>
        <div className="resume">
          <img
            src={"cv.com"}
            alt="resume"
            onClick={() => openModal(element.resume.url)}
          />
        </div>
      </div>
    </>
  );
};
