import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
  width?: () => void;
}

function Icon_Text({ children, onClick, icon }: Props) {
  return (
    <div
      onClick={onClick}
      id="Text_Icon"
      className={`${onClick ? "click" : ""}`}
    >
      <img src={"./src/assets/" + icon} alt="Icon" />
      {children}
    </div>
  );
}

export default Icon_Text;
