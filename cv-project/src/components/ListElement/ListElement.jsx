import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { PiTrashLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { getMonthName } from "../utils/getMonthName";

import "./ListElement.css";
import { FormSection } from "../Form Field/FormSection";
import { FormField } from "../Form Field/FormField";
import { FormInput } from "../Input/FormInput";

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
      className="remove--item--icon text-c-gray-4 hover:text-c-blue-1 self-center opacity-0 group-hover/item:opacity-100"
    />
  );

  const OpenEdit = (
    <FaChevronDown
      size="20px"
      className="edit--item--icon text-c-gray-4 hover:text-c-blue-1 self-center"
      onClick={() => setIsEditing(true)}
    />
  );

  const CloseEdit = (
    <FaChevronUp
      size="20px"
      className="close--edit--item--icon text-c-gray-4 hover:text-c-blue-1 self-center"
      onClick={() => setIsEditing(false)}
    />
  );

  const [isEditing, setIsEditing] = useState(false);

  console.log(value);

  return (
    <IconContext.Provider value={{ className: "item--icon" }}>
      {arrayName === "educations" && (
        <>
          <div className="group/item mr-4 w-full min-w-full rounded-b-sm border-2 border-solid border-[rgb(231,234,244)] px-6 py-3 md:min-w-auto">
            <div
              className="group-hover/item:text-c-blue-1 inline-flex w-full items-center justify-between"
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
                <FormSection additionalClass="mt-8">
                  <FormField>
                    <FormInput
                      type="text"
                      id="schoolName"
                      register={{ ...register(`schoolName`) }}
                    >
                      School name
                    </FormInput>
                  </FormField>
                  <FormField>
                    <FormInput
                      id="degree"
                      type="text"
                      register={{ ...register(`degree`) }}
                    >
                      Degree
                    </FormInput>
                  </FormField>

                  <FormField>
                    <FormInput
                      id="city"
                      type="text"
                      register={{ ...register(`city`) }}
                    >
                      City
                    </FormInput>
                  </FormField>
                  <div className="grid grid-cols-2 gap-1 md:justify-around">
                    <FormField>
                      <FormInput
                        id="schoolStartDate"
                        type="date"
                        register={{
                          ...register(`schoolStartDate`, {
                            valueAsDate: true,
                          }),
                        }}
                      >
                        School start date
                      </FormInput>
                    </FormField>

                    <FormField>
                      <FormInput
                        id="schoolEndDate"
                        type="date"
                        register={{
                          ...register(`schoolEndDate`, {
                            valueAsDate: true,
                          }),
                        }}
                      >
                        School end date
                      </FormInput>
                    </FormField>
                  </div>
                  {errors.educations?.message && (
                    <FormField isRow={true}>
                      <p className="error__msg">{errors.educations?.message}</p>
                    </FormField>
                  )}
                  <button
                    type="button"
                    className="mt-1.5 w-full min-w-2/3 rounded-2xl bg-green-600 py-2 text-amber-50 outline-transparent hover:cursor-pointer hover:bg-amber-50 hover:text-green-600 focus:outline-4 focus:outline-amber-600 active:bg-purple-600 md:w-auto"
                    onClick={handleSubmit((data) => {
                      update(index, data);
                    })}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-1.5 w-full min-w-2/3 rounded-2xl bg-white px-5 py-2.5 text-gray-900 outline outline-gray-200 hover:cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-4 focus:outline-amber-600 focus:outline-none active:bg-blue-500 md:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-1.5 w-full min-w-2/3 rounded-2xl bg-red-600 py-2 text-amber-200 outline-transparent hover:cursor-pointer hover:bg-red-900 hover:text-red-500 focus:outline-4 focus:outline-yellow-500 active:bg-amber-400 active:text-zinc-700 md:hidden"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </button>
                </FormSection>
              </>
            )}
          </div>
          {Trash}
        </>
      )}

      {arrayName === "jobExperience" && (
        <>
          <div className="group/item mr-4 w-full min-w-full rounded-b-sm border-2 border-solid border-[rgb(231,234,244)] px-6 py-3 md:min-w-auto">
            <div
              className="group-hover/item:text-c-blue-1 inline-flex w-full items-center justify-between"
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
                <FormSection additionalClass="mt-8">
                  <FormField>
                    <FormInput
                      type="text"
                      id="companyName"
                      register={{ ...register(`companyName`) }}
                    >
                      Company name
                    </FormInput>
                  </FormField>
                  <FormField>
                    <FormInput
                      id="position"
                      type="text"
                      register={{ ...register(`position`) }}
                    >
                      Position
                    </FormInput>
                  </FormField>

                  <FormField>
                    <FormInput
                      type="date"
                      id="jobStartDate"
                      register={{
                        ...register(`jobStartDate`, {
                          valueAsDate: true,
                        }),
                      }}
                    >
                      Job start date
                    </FormInput>
                  </FormField>

                  <FormField>
                    <FormInput
                      id="jobEndDate"
                      type="date"
                      register={{
                        ...register(`jobEndDate`, {
                          valueAsDate: true,
                        }),
                      }}
                    >
                      Job end date
                    </FormInput>
                  </FormField>
                  <FormField isRow={true}>
                    <FormInput
                      type="textarea"
                      id="description"
                      register={{ ...register(`description`) }}
                    >
                      Description
                    </FormInput>
                  </FormField>
                  <button
                    type="button"
                    className="mt-1.5 w-full min-w-2/3 rounded-2xl bg-green-600 py-2 text-amber-50 outline-transparent hover:cursor-pointer hover:bg-amber-50 hover:text-green-600 focus:outline-4 focus:outline-amber-600 active:bg-purple-600 md:w-auto"
                    onClick={handleSubmit((data) => {
                      update(index, data);
                    })}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-1.5 w-full min-w-2/3 rounded-2xl bg-white px-5 py-2.5 text-gray-900 outline outline-gray-200 hover:cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-4 focus:outline-amber-600 focus:outline-none active:bg-blue-500 md:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-1.5 w-full min-w-2/3 rounded-2xl bg-red-600 py-2 text-amber-200 outline-transparent hover:cursor-pointer hover:bg-red-900 hover:text-red-500 focus:outline-4 focus:outline-yellow-500 active:bg-amber-400 active:text-zinc-700 md:hidden"
                    onClick={() => remove(index)}
                  >
                    Delete
                  </button>
                </FormSection>
              </>
            )}
          </div>
          {Trash}
        </>
      )}
    </IconContext.Provider>
  );
};
