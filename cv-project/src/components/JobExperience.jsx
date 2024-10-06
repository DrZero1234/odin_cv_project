import { useState } from "react";
import { Modal } from "./Modal";

import WorkIcon from "../assets/WorkIcon.svg";
import addIcon from "../assets/addIcon.svg";

const defaultState = {
  companyName: "",
  position: "",
  description: "",
  workStartDate: "",
  workEndDate: "",
};

export const JobExperience = ({ cvState, setCvState }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWorkState, setNewWorkState] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewWorkState(defaultState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cvStateCopy = JSON.parse(JSON.stringify(cvState));
    console.log(cvStateCopy);
    cvStateCopy.experience.push(newWorkState);
    setCvState(cvStateCopy);
    setIsModalOpen(false);
    setNewWorkState(defaultState);
    console.log(cvState);
  };

  return (
    <>
      <h1>Job experience</h1>
      <div
        onClick={() => setIsModalOpen(true)}
        className="add--panel job--panel"
      >
        <img src={WorkIcon} className="panel__icon" />
        <div>
          <span className="add__sign">+</span>Add work experience
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <form className="form modal--form" onSubmit={handleSubmit}>
            <div className="formfield--wrapper">
              <label htmlFor="companyName">
                Company name <span aria-label="required">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                required
                value={newWorkState.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="formfield--wrapper">
              <label htmlFor="position">
                Position <span aria-label="required">*</span>
              </label>
              <input
                id="position"
                type="text"
                name="position"
                required
                value={newWorkState.position}
                onChange={handleChange}
              />
            </div>
            <div className="formfield--wrapper">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="textarea"
                name="description"
                required
                value={newWorkState.description}
                onChange={handleChange}
              />
            </div>
            <div className="form--row">
              <div className="formfield--wrapper">
                <label htmlFor="startDate">
                  Start date <span aria-label="required">*</span>
                </label>
                <input
                  type="date"
                  value={newWorkState.workStartDate}
                  onChange={handleChange}
                  name="workStartDate"
                  id="startDate"
                  required
                />
              </div>
              <div className="formfield--wrapper">
                <label htmlFor="endDate">End date</label>
                <input
                  type="date"
                  value={newWorkState.workEndDate}
                  onChange={handleChange}
                  name="workEndDate"
                  id="endDate"
                ></input>
              </div>
            </div>
            <div className="add--btn--wrapper">
              <button type="submit" className="add--btn">
                <img className="add--icon" src={addIcon}></img>
                Add
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
