import { useController } from "react-hook-form";

export const ControlTest = ({ register, name, formState }) => {
  const { errors } = formState;

  return (
    <>
      <div className="form--field">
        <label htmlFor={name}>Test value</label>
        <input
          type="text"
          id={name}
          {...register(name, { required: "This field is required" })}
        />
        <p className="error__msg">{errors[name]?.message}</p>
      </div>
    </>
  );
};
