export const FormInput = ({ type, id, register, children }) => {
  return (
    <>
      {/* Add custom font for label */}
      <label
        className="text-c-gray-1 font-Cantarell-Regular text-sm shadow-none"
        htmlFor={id}
      >
        {children}
      </label>
      <input
        className={`bg-c-gray-2 font-c-black-1 caret-c-blue-1 placeholder:text-c-gray-4 w-full rounded-sm border-0 p-2.5 transition-shadow duration-200 ease-in focus:border-0 focus:shadow-[0_2px_0_var(--c-blue-1)] focus:outline-0 ${
          type == "textarea" ? "resize-none" : ""
        }`}
        type={type}
        id={id}
        accept={type === "file" && ".png, .jpg, .jpeg, .svg, .wepb"}
        {...register}
      />
    </>
  );
};
