export const FormSection = ({ children }) => {
  return (
    <section className="mb-8 grid grid-cols-1 content-center gap-4 md:grid-cols-2">
      {children}
    </section>
  );
};
