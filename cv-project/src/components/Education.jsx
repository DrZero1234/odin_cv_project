import Icon from "@mdi/react";

import { mdiPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiCheckBold } from "@mdi/js";
import { mdiCloseThick } from "@mdi/js";

import { useState } from "react";

export const Education = ({
  education_data,
  educations,
  setEducations,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editEducationData, setEditEducationData] =
    useState(education_data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEducationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (e, id) => {
    const educations_copy = educations.slice();
    e.preventDefault();
    const index = educations.indexOf(
      educations.find((work) => work.id === id)
    );
    educations_copy[index] = editEducationData;
    setEducations(educations_copy);
    setIsEditing(false);
    console.log(index);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    let educations_copy = educations.filter(
      (education) => education.id != id
    );
    setEducations(educations_copy);
  };

  console.log(editEducationData);
  return (
    <tr key={education_data.id}>
      <td>
        {!isEditing ? (
          education_data.name
        ) : (
          <input
            type="text"
            name="name"
            value={editEducationData.name}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          education_data.type
        ) : (
          <select
            name="type"
            id="education-type"
            onChange={handleChange}
            value={editEducationData.type}
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
        )}
      </td>
      <td>
        {!isEditing ? (
          education_data.start_date
        ) : (
          <input
            type="date"
            name="start_date"
            value={editEducationData.start_date}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          education_data.end_date
        ) : (
          <input
            type="date"
            name="end_date"
            value={editEducationData.end_date}
            onChange={handleChange}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          <>
            <button
              className="table-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Icon path={mdiPencil} size={1} className="btn-icon" />
            </button>
            <button className="table-btn">
              <Icon
                path={mdiDelete}
                size={1}
                className="btn-icon"
                onClick={(e) => handleDelete(e, education_data.id)}
              />
            </button>
          </>
        ) : (
          <>
            <button className="table-btn">
              <Icon
                path={mdiCheckBold}
                size={1}
                className="table-accept"
                onClick={(e) => handleEdit(e, education_data.id)}
              />
            </button>
            <button
              className="table-btn"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              <Icon
                path={mdiCloseThick}
                size={1}
                className="table-cancel"
              />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};
