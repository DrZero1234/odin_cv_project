import { useState } from "react";

import { PastEducations } from "./components/PastEducations";
import { JobExperience } from "./components/JobExperience";
import { GeneralInformation } from "./components/GeneralInformation";

import Icon from "@mdi/react";

import { MyDocument } from "./utils/CvPdf";
import { PDFViewer } from "@react-pdf/renderer";
import { mdiFileAccount } from "@mdi/js";

function App() {
  // template: https://preview.themeforest.net/item/geeko-cv-builder-resume-maker-bootstrap-template/full_screen_preview/34056293
  const MOCK_EDUCATIONS = [
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

  const MOCK_WORK = [
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

  const [count, setCount] = useState(0);
  const [generalInformation, setGeneralInformation] = useState({
    name: "",
    birth_date: "",
    phone: "",
    email: "",
  });
  const [educations, setEducations] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
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
            <MyDocument personal_info={generalInformation} />
          </PDFViewer>
        </div>
        <div className="main-content">
          <GeneralInformation
            generalInformation={generalInformation}
            setGeneralInformation={setGeneralInformation}
          />
          <PastEducations
            educations={educations}
            setEducations={setEducations}
          />
          <JobExperience
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
          />
          <button className="create-pdf-btn">Create Resume</button>
        </div>
      </div>
    </>
  );
}

export default App;
