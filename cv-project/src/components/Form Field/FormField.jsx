export const FormField = ({ isRow, additionalClass, children }) => {
  return (
    <div
      className={`flex ${additionalClass ? additionalClass : ""} flex-col gap-1 ${isRow ? "col-span-full" : ""}`}
    >
      {children}
    </div>
  );
};
