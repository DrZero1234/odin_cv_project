import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { PiTrashLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { getMonthName } from "../utils/getMonthName";

import "./ListElement.css";

// The added element

const defaultEducationObj = {
  schoolName: "New school",
  degree: "",
  city: "",
  schoolStartDate: new Date(),
  schoolEndDate: new Date(),
};

const defaultJobExperienceObj = {
  companyName: "",
  position: "",
  jobStartDate: new Date(),
  jobEndDate: new Date(),
  description: "",
};

const Display = ({ control, index, arrayName }) => {
  const data = useWatch({
    control,
    name: `${arrayName}.${index}`,
  });

  // if (arrayName === "educations" && !data.schoolName) return null;
  /*else if (arrayName === "jobExperience" && !data.companyName)
    return null;
  */

  console.log(data?.schoolName);

  if (arrayName === "educations") {
    return (
      <div>
        <h3>Submitted data</h3>
        <p>{data?.schoolName}</p>
      </div>
    );
  }
};

export const ListElement = ({
  arrayName,
  control,
  update,
  index,
  value,
  remove,
  errors,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: value,
  });

  const Trash = (
    <PiTrashLight
      size="25px"
      onClick={() => remove(index)}
      className="remove--item--icon"
    />
  );

  const OpenEdit = (
    <FaChevronDown
      size="20px"
      className="edit--item--icon"
      onClick={() => setIsEditing(true)}
    />
  );

  const CloseEdit = (
    <FaChevronUp
      size="20px"
      className="close--edit--item--icon"
      onClick={() => setIsEditing(false)}
    />
  );

  const [isEditing, setIsEditing] = useState(false);

  console.log(value);

  return (
    <IconContext.Provider value={{ className: "item--icon" }}>
      {arrayName === "educations" && (
        <>
          <div className="list--item">
            <div
              className="list--item__label"
              onClick={() => setIsEditing(!isEditing)}
            >
              <div className="list--item__label__name">
                <p>{value?.schoolName}</p>
                <p>
                  {JSON.stringify(
                    getMonthName(value?.schoolStartDate.getMonth()),
                  ).slice(1, -1)}{" "}
                  {JSON.stringify(value?.schoolStartDate.getFullYear())} -{" "}
                  {JSON.stringify(
                    getMonthName(value?.schoolEndDate.getMonth()),
                  ).slice(1, -1)}{" "}
                  {JSON.stringify(value?.schoolEndDate.getFullYear())}
                </p>
              </div>
              {!isEditing ? OpenEdit : CloseEdit}
            </div>

            {isEditing && (
              // Editing
              <>
                <div className="form--section edit--form">
                  <div className="form--field">
                    <label htmlFor="schoolName">School name</label>
                    <input
                      id="schoolName"
                      type="text"
                      {...register(`schoolName`)}
                    />
                  </div>
                  <div className="form--field">
                    <label htmlFor="degree">Degree</label>
                    <input id="degree" type="text" {...register(`degree`)} />
                  </div>

                  <div className="form--field">
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" {...register(`city`)} />
                  </div>
                  <div className="double--field">
                    <div className="form--field">
                      <label htmlFor="schoolStartDate">School start date</label>
                      <input
                        id="schoolStartDate"
                        type="date"
                        {...register(`schoolStartDate`, {
                          valueAsDate: true,
                        })}
                      />
                    </div>

                    <div className="form--field">
                      <label htmlFor="schoolEndDate">School end date</label>
                      <input
                        id="schoolEndDate"
                        type="date"
                        {...register(`schoolEndDate`, {
                          valueAsDate: true,
                        })}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit((data) => {
                      update(index, data);
                    })}
                  >
                    Confirm
                  </button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                  <p className="error__msg">{errors.educations?.message}</p>
                </div>
              </>
            )}
          </div>
          {Trash}
        </>
      )}

      {arrayName === "jobExperience" && (
        <>
          <div className="list--item">
            <div
              className="list--item__label"
              onClick={() => setIsEditing(!isEditing)}
            >
              <div className="list--item__label__name">
                <p>{value?.companyName}</p>
                <p>
                  {JSON.stringify(
                    getMonthName(value?.jobStartDate.getMonth()),
                  ).slice(1, -1)}{" "}
                  {JSON.stringify(value?.jobStartDate.getFullYear())} -{" "}
                  {JSON.stringify(
                    getMonthName(value?.jobEndDate.getMonth()),
                  ).slice(1, -1)}{" "}
                  {JSON.stringify(value?.jobEndDate.getFullYear())}
                </p>
              </div>
              {!isEditing ? OpenEdit : CloseEdit}
            </div>

            {isEditing && (
              // Editing
              <>
                <div className="form--section edit--form">
                  <div className="form--field">
                    <label htmlFor="companyName">Company name</label>
                    <input
                      id="companyName"
                      type="text"
                      {...register(`companyName`)}
                    />
                  </div>
                  <div className="form--field">
                    <label htmlFor="position">Position</label>
                    <input
                      id="position"
                      type="text"
                      {...register(`position`)}
                    />
                  </div>

                  <div className="double--field">
                    <div className="form--field">
                      <label htmlFor="jobStartDate">Job start date</label>
                      <input
                        id="jobStartDate"
                        type="date"
                        {...register(`jobStartDate`, {
                          valueAsDate: true,
                        })}
                      />
                    </div>

                    <div className="form--field">
                      <label htmlFor="jobEndDate">Job end date</label>
                      <input
                        id="jobEndDate"
                        type="date"
                        {...register(`jobEndDate`, {
                          valueAsDate: true,
                        })}
                      />
                    </div>
                  </div>
                  <div className="form--field">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      type="text"
                      {...register(`description`)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit((data) => {
                      update(index, data);
                    })}
                  >
                    Confirm
                  </button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </>
            )}
          </div>
          {Trash}
        </>
      )}
    </IconContext.Provider>
  );
};
