export const FormField = ({ isRow, children }) => {
  const rowClass = "";

  return (
    <div className={`flex flex-col gap-1 ${isRow && "col-span-full"}`}>
      {children}
    </div>
  );
};
