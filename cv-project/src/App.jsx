import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Example template: https://app.cvmaker.com/#/history/

//EXAMPLE STATE

/*

{
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    educations: [
      /*{
        schoolName: "",
        studyType: [High school, Secondary school,College, University],
        schoolField: "",
        studyStartDate: "",
        studyEndDate: "",
      }
    ],
    experience: [
      /*{
        companyName: "",
        position: "",
        description: "",
        workStartDate: "",
        workEndDate: ""
      }
    ],
  }
*/

let renderCount = 0;

const defaultValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  educations: [],
  workExperience: [],
};

function App() {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
    disabled,
    delayError: 1000,
  });

  const sleep = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const onSubmit = async (data) => {
    setDisabled(true);
    await sleep(2000);
    setDisabled(false);
    await console.log(data);
  };

  const onError = (errors) => console.error(errors);

  const formData = watch();

  console.log(formData);

  renderCount++;
  return (
    <>
      <h1>Form {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="form--control">
          <label>
            First name
            <input
              {...register("firstName", {
                required: "Please fill in this field",
                minLength: {
                  value: 4,
                  message: "This name is too short",
                },
                maxLength: {
                  value: 50,
                  message: "This name is too long",
                },
              })}
            />
          </label>
          <p className="error__msg">{errors.firstName?.message}</p>
        </div>
        <div className="form--control">
          <label>
            Last name
            <input
              {...register("lastName", {
                required: "Please fill in this field",
                minLength: {
                  value: 4,
                  message: "This name is too short",
                },
                maxLength: {
                  value: 50,
                  message: "This name is too long",
                },
              })}
            />
          </label>
          <p className="error__msg">{errors.lastName?.message}</p>
        </div>
        <div className="form--control">
          <label>
            Email
            <input
              type="email"
              {...register("email", {
                required: "Please fill in this field",
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                  message: "Invalid email format!",
                },
                minLength: {
                  value: 8,
                  message: "This email is too short (min. chars 8)",
                },
                validate: {
                  notAdmin: (fieldValue) =>
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email address",
                  notBlacklisted: (fieldValue) =>
                    // Doesnt work since there is no endsWith
                    fieldValue.split("@")[1] !== "baddomain.com" ||
                    "This domain is not supported",
                },
              })}
            />
          </label>
          <p className="error__msg">{errors.email?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
