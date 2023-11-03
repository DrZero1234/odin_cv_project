import { useState } from "react";
import Icon from "@mdi/react";

import { mdiPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiCheckBold } from "@mdi/js";
import { mdiCloseThick } from "@mdi/js";

export const Job = ({
  educations,
  job_data,
  workExperience,
  setWorkExperience,
}) => {
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

  const handleEdit = (e, id) => {
    const educations_copy = workExperience.slice();
    e.preventDefault();
    const index = workExperience.indexOf(
      workExperience.find((work) => work.id === id)
    );
    educations_copy[index] = editJobData;
    setWorkExperience(educations_copy);
    setIdEditing(false);
    console.log(index);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    let workExperience_copy = workExperience.filter(
      (work) => work.id != id
    );
    setWorkExperience(workExperience_copy);
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
            rows={2}
          />
        )}
      </td>
      <td>
        {!isEditing ? (
          <>
            <button
              className="table-btn"
              onClick={() => setIdEditing(!isEditing)}
            >
              <Icon path={mdiPencil} size={1} className="btn-icon" />
            </button>
            <button
              className="table-btn"
              onClick={(e) => handleDelete(e, job_data.id)}
            >
              <Icon path={mdiDelete} size={1} className="btn-icon" />
            </button>
          </>
        ) : (
          <>
            <button className="table-btn">
              <Icon
                path={mdiCheckBold}
                size={1}
                className="table-accept"
                onClick={(e) => handleEdit(e, job_data.id)}
              />
            </button>
            <button
              className="table-btn"
              onClick={() => setIdEditing(false)}
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
