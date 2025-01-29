import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

// The added element

const defaultEducationObj = {
  schoolName: "New school",
  degree: "",
  city: "",
  schoolStartDate: new Date(),
  schoolEndDate: new Date(),
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
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: value,
  });

  const [isEditing, setIsEditing] = useState(false);

  console.log(value);

  return (
    <div>
      {arrayName === "educations" && (
        <div>
          {isEditing ? (
            // Editing
            <>
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
                <input
                  id="degree"
                  type="text"
                  {...register(`degree`)}
                />
              </div>

              <div className="form--field">
                <label htmlFor="city">City</label>
                <input id="city" type="text" {...register(`city`)} />
              </div>
              <div className="double--field">
                <div className="form--field">
                  <label htmlFor="schoolStartDate">
                    School start date
                  </label>
                  <input
                    id="schoolStartDate"
                    type="date"
                    {...register(`schoolStartDate`, {
                      valueAsDate: true,
                    })}
                  />
                </div>

                <div className="form--field">
                  <label htmlFor="schoolEndDate">
                    School end date
                  </label>
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
              <button onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            // Not editing
            <>
              <p>{value?.schoolName}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
