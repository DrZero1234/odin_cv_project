import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormTab } from "./FormTab";
import { Education } from "./Education";

export const PastEducations = ({ educations, setEducations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newEducation, setNewEducation] = useState({
    id: uuidv4(),
    name: "",
    type: "",
    start_date: "",
    end_date: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setEducations([...educations, newEducation]);
    setNewEducation({
      id: uuidv4(),
      name: "",
      type: "",
      start_date: "",
      end_date: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <FormTab
        title="Education"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="form-wrapper education">
        {isOpen && (
          <>
            <form
              className="data-form education-form"
              onSubmit={(e) => handleAdd(e)}
            >
              <div className="form-input education-name">
                <label htmlFor="school-name">School name:</label>
                <input
                  type="text"
                  id="school-name"
                  name="name"
                  value={newEducation.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input education-type">
                <label htmlFor="education-type">Degree:</label>
                <select
                  name="type"
                  id="education-type"
                  required
                  onChange={handleChange}
                  value={newEducation.type}
                >
                  <option value="primary" name="primary">
                    Primary
                  </option>
                  <option value="highschool" name="highschool">
                    High School
                  </option>
                  <option value="university" name="university">
                    University
                  </option>
                  <option value="college" name="college">
                    College
                  </option>
                </select>
              </div>
              <div className="form-input education-start">
                <label htmlFor="schoolstart">Start date</label>
                <input
                  type="date"
                  id="schoolstart"
                  name="start_date"
                  value={newEducation.start_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input education-end">
                <label htmlFor="schoolend">End date</label>
                <input
                  type="date"
                  id="schoolend"
                  onChange={handleChange}
                  name="end_date"
                  value={newEducation.end_date}
                  required
                />
              </div>
              <button type="submit" className="btn add-btn">
                Add education
              </button>
            </form>
            {educations.length > 0 && (
              <>
                <h3>Educations</h3>
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
                            educations={educations}
                            education_data={education}
                            setEducations={setEducations}
                            key={education.id}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
