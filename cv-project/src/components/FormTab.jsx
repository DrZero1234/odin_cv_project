import { mdiSchool } from "@mdi/js/commonjs/mdi";
import Icon from "@mdi/react";

export const FormTab = ({ title, isOpen, setIsOpen }) => {
  return (
    <div
      className="form-tab education btn"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon path={mdiSchool} size={2} className="tab-icon" />
      <h2>{title}</h2>
    </div>
  );
};
