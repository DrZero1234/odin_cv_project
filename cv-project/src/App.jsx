import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ControlTest } from "./components/ControlTest";

const defaultValues = {
  firstName: "John",
  lastName: "Smith",
  birthDate: new Date(),
  gender: "",
  email: "lel@email.com",
  phone: "+1234567890",
  address: "gfds",
  zipCode: "",
  city: "",
  educations: [
    {
      schoolName: "",
      degree: "",
      city: "",
      schoolStartDate: new Date(),
      schoolEndDate: new Date(),
    },
  ],
  jobExperience: [
    {
      companyName: "",
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

  const { errors, isValid } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "educations",
    control,
    rules: {
      required: "You need to add at least one education data.",
    },
  });

  console.log(watch());

  const onSubmit = (data) => console.log(data);

  const onError = (errors) => console.error("Form error: ", errors);

  return (
    <>
      <div className="container page--wrapper">
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
            <p className="error__msg">{errors.firstName?.message}</p>
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
            <p className="error__msg">{errors.birthDate?.message}</p>
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

          {/* Educations START */}
          <ul>
            {fields.map((field, index) => {
              return (
                <>
                  <div key={field.id}>
                    <li className="form--field">
                      <label htmlFor="schoolName">School name</label>
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
                      <button
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </>
              );
            })}
            <button type="button" onClick={() => append({})}>
              Append
            </button>
            <button type="button">Edit</button>
            {errors.educations?.message}
          </ul>
          {/* Educations END */}
          <button
            type="submit" /*disabled={!isValid ? true : false}*/
          >
            Submit form
          </button>
          <button onClick={() => reset()}>Reset</button>
        </form>

        <div className="container">
          <div className="preview">
            <h2>CV preview</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
