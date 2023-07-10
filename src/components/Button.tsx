import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success" | "dark" | "light";
  onClick?: () => void;
  width?: () => void;
}

function ButtonVisible({ children, onClick, color = "primary" }: Props) {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default ButtonVisible;
