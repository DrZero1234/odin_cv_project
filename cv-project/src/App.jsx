import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ControlTest } from "./components/ControlTest";
import { ListElement } from "./components/ListElement/ListElement";
import { NavBar } from "./components/NavBar/NavBar";
import { PDFViewer, render, renderToFile } from "@react-pdf/renderer";
import { MyDocument } from "./components/CvPdf";
import { StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { FormInput } from "./components/Input/FormInput";
import { ErrorMessage } from "./components/Input/ErrorMessage";
import { FormField } from "./components/Form Field/FormField";
import { FormSection } from "./components/Form Field/FormSection";

// TEMPLATE LINK: https://resume.io/app/resumes/52176034/edit

const pdfDocStyles = StyleSheet.create({
  viewer: {
    width: "100%",
    minHeight: "50%",
  },
});
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
  const { register, control, handleSubmit, reset, watch, formState } = useForm({
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
      required: "You need to add at least one job experience data.",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => console.error("Form error: ", errors);

  // console.log(watch());

  return (
    <>
      <header className="bg-header-bg selection:bg-c-blue-2 p-2 selection:text-black">
        <div className="max-w-8x1 container m-auto w-[95%]">
          <NavBar />
        </div>
      </header>
      <main className="font-Cantarell-Regular selection:bg-c-blue-2 container grid min-h-screen w-[95%] grid-cols-1 selection:text-black xl:grid-cols-2">
        <form
          className="p-[1.5em]"
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
        >
          <FormSection>
            <FormField isRow={true}>
              <FormInput
                type="text"
                id="firstName"
                register={{
                  ...register("firstName", {
                    required: "This field is required",
                    maxLength: {
                      value: 80,
                      message: "The name is too long",
                    },
                  }),
                }}
              >
                First name
              </FormInput>
              {/*  
              <label htmlFor="firstName">First name*</label>
              <input
                className="p-0.5 bg-sky-100"
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
              */}

              <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
            </FormField>
            <FormField isRow={true}>
              <FormInput
                id="lastName"
                type="text"
                register={{
                  ...register("lastName", {
                    required: "This field is required",
                    maxLength: {
                      value: 80,
                      message: "The name is too long",
                    },
                  }),
                }}
              >
                Last name
              </FormInput>
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
            </FormField>
            <FormField isRow={true}>
              <FormInput
                id="birthDate"
                type="date"
                register={{
                  ...register("birthDate", {
                    required: "This field is required",
                    valueAsDate: true,
                  }),
                }}
              >
                Birth date*
              </FormInput>
              <ErrorMessage>{errors.birthDate?.message}</ErrorMessage>
            </FormField>
            <FormField>
              <FormInput
                type="email"
                id="email"
                register={{
                  ...register("email", {
                    required: "This field is required",
                    minLength: {
                      value: 10,
                      message:
                        "Your email is too short (min. 10 characters incl. @,.)",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                      message: "Invalid e-mail format",
                    },
                  }),
                }}
              >
                Email address*
              </FormInput>

              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </FormField>

            <FormField>
              <FormInput
                id="profilePicture"
                type="file"
                accept=".png, .jpg, .jpeg, .svg, .wepb"
                register={{ ...register("profilePicture") }}
              >
                Profile picture
              </FormInput>
              <ErrorMessage>{errors.profilePicture?.message}</ErrorMessage>
            </FormField>
            <FormField isRow={true}>
              <FormInput
                type="tel"
                id="phone"
                register={{
                  ...register("phone", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message:
                        "Invalid phone number format. Example: (+1234567890, 1234567890, 123-456-7890)",
                    },
                  }),
                }}
              >
                Phone number*
              </FormInput>
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </FormField>
            <FormField isRow={true}>
              <FormInput
                id="address"
                type="text"
                register={{
                  ...register("address", {
                    required: "This field is required",
                  }),
                }}
              >
                Address*
              </FormInput>
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            </FormField>
            <div>
              <FormInput
                type="textarea"
                id="testValue"
                register={{
                  ...register("testValue", {
                    required: "This field is required",
                  }),
                }}
              >
                Test value
              </FormInput>
            </div>
          </FormSection>

          {/* Educations START */}
          <h2>Education</h2>
          <section className="form--section education">
            <ul className="cv--list col-span-full grid list-none gap-1">
              {educationFields.map((field, index) => {
                return (
                  <li
                    key={field.id}
                    className="list--item--wrapper inline-flex hover:cursor-pointer"
                  >
                    <ListElement
                      arrayName="educations"
                      value={field}
                      control={control}
                      update={updateEducation}
                      index={index}
                      remove={removeEducation}
                      errors={errors}
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
                className="add--item--btn justify-self-[unset] text-c-blue-1 hover:bg-c-gray-3 mt-5 rounded-b-sm border-none bg-inherit px-4 py-2 text-left font-bold duration-150 hover:cursor-pointer"
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
            <ul className="cv--list list-none">
              {jobFields.map((jobField, index) => {
                return (
                  <li
                    key={jobField.id}
                    className="list--item--wrapper inline-flex hover:cursor-pointer"
                  >
                    <ListElement
                      arrayName="jobExperience"
                      value={jobField}
                      control={control}
                      update={updateJob}
                      index={index}
                      remove={removeJob}
                      errors={errors}
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
                className="add--item--btn justify-self-[unset] text-c-blue-1 hover:bg-c-gray-3 mt-5 rounded-b-sm border-none bg-inherit px-4 py-2 text-left font-bold duration-150 hover:cursor-pointer"
              >
                + Add job experience
              </button>
              {errors.jobExperience?.message}
            </ul>
          </section>

          {/*Job experience END*/}
          {isValid ? (
            <PDFDownloadLink
              document={
                <MyDocument
                  CvState={watch()}
                  educationFields={educationFields}
                  jobFields={jobFields}
                />
              }
              fileName="myCV.pdf"
            >
              {({ blob, url, loading, error }) => (
                <button type="button" disabled={loading ? true : false}>
                  Download form
                </button>
              )}
            </PDFDownloadLink>
          ) : (
            <button type="submit" className="col-span-full">
              Check form
            </button>
          )}

          <button
            type="button"
            className="col-span-full"
            onClick={() => reset()}
          >
            Reset
          </button>
          <button
            type="button"
            className="col-span-full"
            onClick={() => console.log(watch())}
          >
            Log form state
          </button>
        </form>

        <div className="container">
          <div className="preview flex h-full flex-col items-center justify-center gap-y-8 p-[1.5em]">
            <h2>CV preview</h2>
            <PDFViewer style={pdfDocStyles.viewer} showToolbar={false}>
              <MyDocument
                CvState={watch()}
                educationFields={educationFields}
                jobFields={jobFields}
              />
            </PDFViewer>
          </div>
        </div>
      </main>
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
