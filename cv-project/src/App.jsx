import { useEffect, useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";

import { JobExperience } from "./components/JobExperience";
import { Education } from "./components/Education";
import { Cvfile } from "./components/CvFile";

// Example template: https://www.jotform.com/build/242695954884376?s=templates&salesforceTemplate=1

function App() {
  const [cvState, setCvState] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    educations: [
      /*{
        schoolName: "",
        studyType: [High school, Secondary school,College, University],
        schoolField: "",
        studyStartDate: "",
        studyEndDate: "",
      }*/
    ],
    experience: [
      /*{
        companyName: "",
        position: "",
        description: "",
        workStartDate: "",
        workEndDate: ""
      }*/
    ],
  });

  const [showPreview, setShowPreview] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 720) {
        setShowPreview(true);
      }
    };

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  });

  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <div className="container">
            <h1 className="title page--title">CV maker</h1>
          </div>
        </header>

        <main className="main">
          <div className="container row">
            <div className="user--page">
              <div className="title--wrapper">
                <h1 className="title">Create your own CV</h1>
              </div>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="form"
                id="CVForm"
              >
                <h2 className="section--title">Personal details</h2>
                <div className="form--row">
                  <div className="formfield--wrapper">
                    <label htmlFor="firstName">
                      First name<span aria-label="required">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={cvState.firstName}
                      onChange={handleChange}
                      required
                    ></input>
                    <span></span>
                  </div>
                  <div className="formfield--wrapper">
                    <label htmlFor="lastName">
                      Last name<span aria-label="required">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={cvState.lastName}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>

                <div className="formfield--wrapper">
                  <label htmlFor="birthDate">
                    BirthDate <span aria-label="required">*</span>
                  </label>
                  <input
                    type="date"
                    value={cvState.birthDate}
                    onChange={handleChange}
                    name="birthDate"
                    id="birthDate"
                  ></input>
                </div>
                <div className="form--row">
                  <div className="formfield--wrapper">
                    <label htmlFor="email">
                      Email<span aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={cvState.email}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="formfield--wrapper">
                    <label htmlFor="phone">
                      Phone<span aria-label="required">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={cvState.phone}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>
                <div className="formfield--wrapper">
                  <label htmlFor="address">
                    Address<span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={cvState.address}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="formfield--wrapper">
                  <label htmlFor="city">
                    City<span aria-label="required">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={cvState.city}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="formfield--wrapper">
                  <label htmlFor="zipCode">
                    ZIP code<span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    inputMode="numeric"
                    value={cvState.zipCode}
                    onChange={handleChange}
                    minLength={5}
                    maxLength={5}
                    required
                  ></input>
                </div>
              </form>
              <h2 className="section--title">Education</h2>
              <Education cvState={cvState} setCvState={setCvState} />
              <h2 className="section--title">Work Experience</h2>
              <JobExperience
                cvState={cvState}
                setCvState={setCvState}
              />
              <button type="submit" form="CVForm">
                Generate CV
              </button>

              <button
                className="previewBtn"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Hide preview" : "Show preview"}
              </button>
            </div>
            <div className="preview">
              {showPreview && (
                <PDFViewer>
                  <Cvfile cvState={cvState} />
                </PDFViewer>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
