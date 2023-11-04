import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Job } from "./Job";
import { FormTab } from "./FormTab";

export const JobExperience = ({
  workExperience,
  setWorkExperience,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    id: uuidv4(),
    name: "",
    type: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let workExperience_copy = workExperience.slice();
    workExperience_copy = [...workExperience, newJob];
    setWorkExperience(workExperience_copy);
    setNewJob({
      id: uuidv4(),
      name: "",
      type: "",
      start_date: "",
      end_date: "",
      description: "",
    });
  };
  return (
    <>
      <FormTab
        title="Work Experience"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="form-wrapper job">
        {isOpen && (
          <>
            <form
              className="data-form work-form"
              onSubmit={(e) => handleAdd(e)}
            >
              <div className="form-input work-name">
                <label htmlFor="company-name">Company name:</label>
                <input
                  type="text"
                  id="company-name"
                  value={newJob.name}
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input work-name">
                <label htmlFor="work-position">Position:</label>
                <input
                  type="text"
                  id="work-position"
                  name="position"
                  value={newJob.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input work-start">
                <label htmlFor="workstart">Start date</label>
                <input
                  type="date"
                  id="workstart"
                  name="start_date"
                  value={newJob.start_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input work-end">
                <label htmlFor="workend">End date</label>
                <input
                  type="date"
                  id="workend"
                  name="end_date"
                  value={newJob.end_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input work-description">
                <label htmlFor="work-description">Description:</label>
                <textarea
                  name="description"
                  id="work-description"
                  rows="5"
                  cols="20"
                  value={newJob.description}
                  onChange={handleChange}
                  placeholder="In couple of sentences describe your ordinary day in the job..."
                />
              </div>
              <button type="submit" className="btn add-btn">
                Add Work Experience
              </button>
            </form>
          </>
        )}
        {workExperience.length > 0 && (
          <>
            <h3>Job history</h3>
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
                  {workExperience.map((job) => {
                    return (
                      <Job
                        job_data={job}
                        workExperience={workExperience}
                        setWorkExperience={setWorkExperience}
                        key={job.id}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};
