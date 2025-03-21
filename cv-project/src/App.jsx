import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ControlTest } from "./components/ControlTest";
import { ListElement } from "./components/ListElement/ListElement";
import { NavBar } from "./components/NavBar/NavBar";
import { PDFViewer, renderToFile } from "@react-pdf/renderer";
import { MyDocument } from "./components/CvPdf";
// TEMPLATE LINK: https://resume.io/app/resumes/52176034/edit

const defaultValues = {
  firstName: "John",
  lastName: "Smith",
  birthDate: new Date(),
  profilePicture: "",
  gender: "",
  email: "lel@email.com",
  phone: "+1234567890",
  address: "gfds",
  zipCode: "",
  city: "",
  educations: [
    {
      schoolName: "New school",
      degree: "",
      city: "",
      schoolStartDate: new Date(),
      schoolEndDate: new Date(),
    },
  ],
  jobExperience: [
    {
      companyName: "New job",
      position: "",
      jobStartDate: new Date(),
      jobEndDate: new Date(),
      description: "",
    },
  ],

  // TESTING ONLY
  testValue: "",
};

const App = () => {
  const { register, control, handleSubmit, reset, watch, formState } =
    useForm({
      defaultValues,
      mode: "onBlur",
    });

  console.log(watch());

  const { errors, isValid } = formState;

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
    update: updateEducation,
  } = useFieldArray({
    name: "educations",
    control,
    rules: {
      required: "You need to add at least one education data.",
    },
  });

  const {
    fields: jobFields,
    append: appendJob,
    remove: removeJob,
    update: updateJob,
  } = useFieldArray({
    name: "jobExperience",
    control,
    rules: {
      required: "You need to add at least one education data.",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    renderToFile(`<${MyDocument}/>`);
  };

  const onError = (errors) => console.error("Form error: ", errors);

  // console.log(watch());

  return (
    <>
      <header>
        <div className="container header">
          <NavBar />
        </div>
      </header>
      <div className="container page--wrapper">
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <section className="form--section personal--details">
            <div className="form--field row">
              <label htmlFor="firstName">First name*</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "This field is required",
                  maxLength: {
                    value: 80,
                    message: "The name is too long",
                  },
                })}
              />
              <p className="error__msg">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="form--field row">
              <label htmlFor="lastName">Last name*</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: "This field is required",
                  maxLength: {
                    value: 80,
                    message: "The name is too long",
                  },
                })}
              />
              <p className="error__msg">{errors.lastName?.message}</p>
            </div>
            <div className="form--field row">
              <label htmlFor="birthDate">Birth date*</label>
              <input
                type="date"
                id="birthDate"
                {...register("birthDate", {
                  required: "This field is required",
                  valueAsDate: true,
                })}
              />
              <p className="error__msg">
                {errors.birthDate?.message}
              </p>
            </div>
            <div className="form--field">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message:
                      "Your email is too short (min. 10 characters incl. @,.)",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                    message: "Invalid e-mail format",
                  },
                })}
              />
              <p className="error__msg">{errors.email?.message}</p>
            </div>

            {/*  

            PROFILE PICTURE INPUT

            <div className="form--field">
              <label htmlFor="profilePicture">Profile picture*</label>
              <input
                type="file"
                id="profilePicture"
                {...register("profilePicture", {
                  required: "This field is required",
                })}
              />
              <p className="error__msg">
                {errors.profilePicture?.message}
              </p>
            </div>

            */}

            <div className="form--field">
              <label htmlFor="phone">Phone number*</label>
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message:
                      "Invalid phone number format. Example: (+1234567890, 1234567890, 123-456-7890)",
                  },
                })}
              />
              <p className="error__msg">{errors.phone?.message}</p>
            </div>
            <div className="form--field row">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: "This field is required",
                })}
              />
              <p className="error__msg">{errors.address?.message}</p>
            </div>
            <ControlTest
              register={register}
              name="testValue"
              formState={formState}
            />
          </section>

          {/* Educations START */}
          <h2>Education</h2>
          <section className="form--section education">
            <ul className="cv--list">
              {educationFields.map((field, index) => {
                return (
                  <li key={field.id} className="list--item--wrapper">
                    <ListElement
                      arrayName="educations"
                      value={field}
                      control={control}
                      update={updateEducation}
                      index={index}
                      remove={removeEducation}
                    />
                  </li>
                );
              })}
              <button
                type="button"
                onClick={() =>
                  appendEducation({
                    schoolName: "New school",
                    degree: "",
                    city: "",
                    schoolStartDate: new Date(),
                    schoolEndDate: new Date(),
                  })
                }
                className="add--item--btn"
              >
                + Add education
              </button>
              {errors.educations?.message}
            </ul>
          </section>

          {/* Educations END */}

          {/*Job experience START*/}

          <h2>Job experience</h2>
          <section className="form--section education">
            <ul className="cv--list">
              {jobFields.map((jobField, index) => {
                return (
                  <li
                    key={jobField.id}
                    className="list--item--wrapper"
                  >
                    <ListElement
                      arrayName="jobExperience"
                      value={jobField}
                      control={control}
                      update={updateJob}
                      index={index}
                      remove={removeJob}
                    />
                  </li>
                );
              })}
              <button
                type="button"
                onClick={() =>
                  appendJob({
                    companyName: "New job",
                    position: "",
                    jobStartDate: new Date(),
                    jobEndDate: new Date(),
                    description: "",
                  })
                }
                className="add--item--btn"
              >
                + Add job experience
              </button>
              {errors.jobExperience?.message}
            </ul>
          </section>

          {/*Job experience END*/}

          <button
            type="submit" /*disabled={!isValid ? true : false}*/
          >
            Submit form
          </button>
          <button type="button" onClick={() => reset()}>
            Reset
          </button>
          <button type="button" onClick={() => console.log(watch())}>
            Log form state
          </button>
        </form>

        <div className="container">
          <div className="preview">
            <h2>CV preview</h2>
            <MyDocument CvState={watch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

/*
 {fields.map((field, index) => {
                return (
                  <>
                    <div key={field.id}>
                      <li className="form--field">
                        <label htmlFor="schoolName">
                          School name
                        </label>
                        <input
                          id="schoolName"
                          type="text"
                          {...register(
                            `educations.${index}.schoolName`
                          )}
                        />
                      </li>
                      <li className="form--field">
                        <label htmlFor="degree">Degree</label>
                        <input
                          id="degree"
                          type="text"
                          {...register(`educations.${index}.degree`)}
                        />
                      </li>
                      <li className="form--field">
                        <label htmlFor="city">City</label>
                        <input
                          id="city"
                          type="text"
                          {...register(`educations.${index}.city`)}
                        />
                      </li>
                      <li className="form--field">
                        <label htmlFor="schoolStartDate">
                          School start date
                        </label>
                        <input
                          id="schoolStartDate"
                          type="date"
                          {...register(
                            `educations.${index}.schoolStartDate`,
                            { valueAsDate: true }
                          )}
                        />
                      </li>
                      <li className="form--field">
                        <label htmlFor="schoolEndDate">
                          School end date
                        </label>
                        <input
                          id="schoolEndDate"
                          type="date"
                          {...register(
                            `educations.${index}.schoolEndDate`,
                            { valueAsDate: true }
                          )}
                        />
                      </li>
                      {index > 0 && (
                        <>
                          <button
                            type="button"
                            onClick={() => remove(index)}
                          >
                            Delete
                          </button>

                          <button
                            type="button"
                            onClick={(data) => {
                              update(index, data);
                            }}
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
*/
