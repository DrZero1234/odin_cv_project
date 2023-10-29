import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Icon from "@mdi/react";
import { mdiSchool } from "@mdi/js/commonjs/mdi";

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
      <form className="general-form">
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
      className="form-tab education"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon path={mdiSchool} size={2} className="tab-icon" />
      <h2>{title}</h2>
    </div>
  );
};

export const Education = (/*{ educations, setEducations }*/) => {
  const educations = [
    {
      name: "School",
      type: "highschool",
      start_date: "2019-09-02",
      end_date: "2022-06-30",
    },
    {
      name: "School",
      type: "highschool",
      start_date: "2019-09-02",
      end_date: "2022-06-30",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [newEducation, setNewEducation] = useState({
    name: "",
    type: "",
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
      <div className="form-wrapper general">
        {isOpen && (
          <form className="general-form">
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
              <label htmlFor="startdate">Start date</label>
              <input type="date" id="startdate" />
            </div>
            <div className="form-input education-end">
              <label htmlFor="enddate">End date</label>
              <input type="date" id="enddate" />
            </div>
            <button type="submit" className="submit-form-btn">
              Add education
            </button>
          </form>
        )}
        {educations && <h3>Current educations</h3>}
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">School type</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {educations.map((education) => {
              return (
                <tr>
                  <td>{education.name}</td>
                  <td>{education.type}</td>
                  <td>{education.start_date}</td>
                  <td>{education.end_date}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
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
          <Education />
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
