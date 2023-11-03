export const GeneralInformation = ({
  generalInformation,
  setGeneralInformation,
  onChange,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-wrapper general">
      <h2>Genreal Information</h2>
      <form className="data-form general-form">
        <div className="form-input general-name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={generalInformation.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input general-birth-date">
          <label htmlFor="birthdate">Date of birth:</label>
          <input
            type="date"
            id="birthdate"
            name="birth_date"
            value={generalInformation.birth_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-input general-email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={generalInformation.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input general-phone">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={generalInformation.phone}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};
