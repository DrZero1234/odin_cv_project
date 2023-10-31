import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Icon from "@mdi/react";
import { mdiSchool } from "@mdi/js/commonjs/mdi";
import { mdiPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiCheckBold } from "@mdi/js";
import { mdiCloseThick } from "@mdi/js";

import { MyDocument } from "./utils/CvPdf";
import { PDFViewer } from "@react-pdf/renderer";
import { mdiFileAccount } from "@mdi/js";

export const GeneralInformation = ({
  generalInformation,
  onChange,
}) => {
  return (
    <div className="form-wrapper general">
      <h2>Genreal Information</h2>
      <form className="data-form general-form">
        <div className="form-input general-name">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-input general-birth-date">
          <label htmlFor="birthdate">Date of birth:</label>
          <input type="date" id="birthdate" />
        </div>
        <div className="form-input general-email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-input general-phone">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" />
        </div>
      </form>
    </div>
  );
};

export const FormTab = ({ title, isOpen, setIsOpen }) => {
  return (
    <div
      className="form-tab education btn"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon path={mdiSchool} size={2} className="tab-icon" />
      <h2>{title}</h2>
    </div>
  );
};

export const PastEducation = (/*{ educations, setEducations }*/) => {
  const educations = [
    {
      id: "jfghjfgh213",
      name: "School",
      type: "highschool",
      start_date: "2019-09-02",
      end_date: "2022-06-30",
    },
    {
      id: "njgdsfjng451",
      name: "School",
      type: "highschool",
      start_date: "2019-09-02",
      end_date: "2022-06-30",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [newEducation, setNewEducation] = useState({
    name: "",
    position: "",
    start_date: "",
    end_date: "",
  });
  return (
    <>
      <FormTab
        title="Education"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="form-wrapper education">
        {isOpen && (
          <form className="data-form education-form">
            <div className="form-input education-name">
              <label htmlFor="school-name">School name:</label>
              <input type="text" id="school-name" />
            </div>
            <div className="form-input education-type">
              <label htmlFor="education-type">Degree:</label>
              <select name="type" id="education-type">
                <option value="">-</option>
                <option value="primary">Primary</option>
                <option value="highschool">High School</option>
                <option value="university">University</option>
                <option value="college">College</option>
              </select>
            </div>
            <div className="form-input education-start">
              <label htmlFor="schoolstart">Start date</label>
              <input type="date" id="schoolstart" />
            </div>
            <div className="form-input education-end">
              <label htmlFor="schoolend">End date</label>
              <input type="date" id="schoolend" />
            </div>
            <button type="submit" className="btn add-btn">
              Add education
            </button>
          </form>
        )}
        {educations && <h3>Educations</h3>}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th scope="col">School name</th>
                <th scope="col">School type</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {educations.map((education) => {
                return (
                  <Education
                    education_data={education}
                    key={education.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const Education = ({ education_data }) => {
  const [isEditing, setIdEditing] = useState(false);
  return (
    <tr key={education_data.id}>
      <td>{education_data.name}</td>
      <td>{education_data.type}</td>
      <td>{education_data.start_date}</td>
      <td>{education_data.end_date}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

const JobExperience = (/*{jobs,setJovs}*/) => {
  const jobs = [
    {
      id: "jfghjfgh213",
      name: "School",
      position: "Bartender",
      start_date: "2019-09-02",
      end_date: "2022-06-30",
      description: "First Job",
    },
    {
      id: "njgdsfjng451",
      name: "School",
      position: "Junior dev",
      start_date: "2019-09-02",
      end_date: "2022-06-30",
      description: "Finally ",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [newJob, setNewJob] = useState({
    name: "",
    type: "",
    start_date: "",
    end_date: "",
  });
  return (
    <>
      <FormTab
        title="Work Experience"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="form-wrapper job">
        {isOpen && (
          <form className="data-form work-form">
            <div className="form-input work-name">
              <label htmlFor="company-name">Company name:</label>
              <input type="text" id="company-name" />
            </div>
            <div className="form-input work-name">
              <label htmlFor="work-position">Position:</label>
              <input type="text" id="work-position" />
            </div>
            <div className="form-input work-start">
              <label htmlFor="workstart">Start date</label>
              <input type="date" id="workstart" />
            </div>
            <div className="form-input work-end">
              <label htmlFor="workend">End date</label>
              <input type="date" id="workend" />
            </div>
            <div className="form-input work-description">
              <label htmlFor="work-description">Description:</label>
              <textarea
                name="description"
                id="work-description"
                rows="5"
                cols="30"
              ></textarea>
            </div>
            <button type="submit" className="btn add-btn">
              Add Work Experience
            </button>
          </form>
        )}
        {jobs && <h3>Job history</h3>}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th scope="col">Company name</th>
                <th scope="col">Position</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th scope="col">Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                return <Job job_data={job} key={job.id} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const Job = ({ job_data }) => {
  const [isEditing, setIdEditing] = useState(false);
  const [editJobData, setEditJobData] = useState(job_data);
  console.log(editJobData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditJobData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <tr key={job_data.id}>
      <td>
        {!isEditing ? (
          job_data.name
        ) : (
          <input
            type="text"
            name="name"
            value={editJobData.name}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          job_data.position
        ) : (
          <input
            type="text"
            name="position"
            value={editJobData.position}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          job_data.start_date
        ) : (
          <input
            type="date"
            name="start_date"
            value={editJobData.start_date}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          job_data.end_date
        ) : (
          <input
            type="date"
            name="end_date"
            value={editJobData.end_date}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          job_data.description
        ) : (
          <textarea
            name="description"
            value={editJobData.description}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        <button
          className="table-btn"
          onClick={() => setIdEditing(!isEditing)}
        >
          <Icon path={mdiPencil} size={1} className="btn-icon" />
        </button>
        <button className="table-btn">
          <Icon path={mdiDelete} size={1} />
        </button>
      </td>
    </tr>
  );
};

function App() {
  // template: https://preview.themeforest.net/item/geeko-cv-builder-resume-maker-bootstrap-template/full_screen_preview/34056293
  const [count, setCount] = useState(0);
  const [generalInformation, setGeneralInformation] = useState({
    name: "",
    birth_date: "",
    phone: "",
    email: "",
  });

  return (
    <>
      <header>
        <div className="header-content">
          <Icon
            path={mdiFileAccount}
            size={2.5}
            className="header-icon"
          />
          <h1>CV Creator</h1>
        </div>
      </header>
      <div className="container">
        <div className="preview">
          <PDFViewer>
            <MyDocument />
          </PDFViewer>
        </div>
        <div className="main-content">
          <GeneralInformation />
          <PastEducation />
          <JobExperience />
          <div>
            <Icon path={mdiSchool} size={1.5} />
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={reactLogo}
                className="logo react"
                alt="React logo"
              />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
