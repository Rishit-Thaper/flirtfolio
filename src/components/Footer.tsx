import React from "react";
export interface toggleProps {
  toggleForm?: () => void;
  toggleRandomLine?: () => void;
  onClose?: () => void;
}
const Footer: React.FC<toggleProps> = ({ toggleForm, toggleRandomLine }) => {
  return (
    <div className="footerComponent">
      <button onClick={toggleForm}>Create</button>
      <button onClick={toggleRandomLine}>Random</button>
    </div>
  );
};

export default Footer;
