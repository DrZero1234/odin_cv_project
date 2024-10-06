import { useState } from "react";
import { Modal } from "./Modal";

import EducationIcon from "../assets/EducationIcon.svg";
import addIcon from "../assets/addIcon.svg";

/*{
        schoolName: "",
        studyType: [High school, Secondary school,College, University],
        schoolField: "",
        studyStartDate: "",
        studyEndDate: "",
      }*/

const defaultState = {
  schoolName: "",
  studyType: "",
  schoolField: "",
  studyStartDate: "",
  studyEndDate: "",
};

export const Education = ({ cvState, setCvState }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEducationState, setNewEducationState] =
    useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducationState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewEducationState(defaultState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cvStateCopy = JSON.parse(JSON.stringify(cvState));
    console.log(cvStateCopy);
    cvStateCopy.educations.push(newEducationState);
    setCvState(cvStateCopy);
    setIsModalOpen(false);
    setNewEducationState(defaultState);
    console.log(cvState);
  };

  return (
    <>
      <h3>Education</h3>
      <div
        onClick={() => setIsModalOpen(true)}
        className="add--panel education--panel"
      >
        <img src={EducationIcon} className="panel__icon" />
        <div>
          <span className="add__sign">+</span>Add education
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <form className="form modal--form" onSubmit={handleSubmit}>
            <div className="formfield--wrapper">
              <label htmlFor="schoolName">
                School name <span aria-label="required">*</span>
              </label>
              <input
                id="schoolName"
                type="text"
                name="schoolName"
                value={newEducationState.schoolName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formfield--wrapper">
              <label htmlFor="studyType">
                Study type <span aria-label="required">*</span>
              </label>
              <div className="select--wrapper">
                <select
                  name="studyType"
                  id="studyType"
                  required
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="High School">High School</option>
                  <option value="Secondary School">
                    Secondary School
                  </option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                </select>
              </div>
            </div>
            <div className="formfield--wrapper">
              <label htmlFor="schoolField">
                School field <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                value={newEducationState.schoolField}
                onChange={handleChange}
                name="schoolField"
                id="schoolField"
                required
              />
            </div>
            <div className="form--row">
              <div className="formfield--wrapper">
                <label htmlFor="studyStartDate">
                  Start date <span aria-label="required">*</span>
                </label>
                <input
                  type="date"
                  value={newEducationState.studyStartDate}
                  onChange={handleChange}
                  name="studyStartDate"
                  id="studyStartDate"
                  required
                />
              </div>
              <div className="formfield--wrapper">
                <label htmlFor="studyEndDate">End date</label>
                <input
                  type="date"
                  value={newEducationState.studyEndDate}
                  onChange={handleChange}
                  name="studyEndDate"
                  id="studyEndDate"
                ></input>
              </div>
            </div>
            <div className="add--btn--wrapper">
              <button type="submit" className="add--btn">
                <img src={addIcon} className="add--icon" />
                Add
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
