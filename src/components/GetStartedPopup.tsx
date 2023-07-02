import React from "react";
import { ReactNode } from "react";

interface GetStartedPopupProps {
  closePopup: () => void;
  heading?: string;
  icon?: string;
  children: ReactNode;
}

const GetStartedPopup: React.FC<GetStartedPopupProps> = ({
  closePopup,
  children,
  heading,
  icon,
}) => {
  return (
    <div id="popup" className="showpopup">
      <div id="popupcontent">
        <div className="center">
          <button
            type="button"
            className="btn-close white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closePopup}
          ></button>
          <img src={"./src/assets/" + icon} alt="Icon" />
          <h1>{heading}</h1>
          <hr></hr>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPopup;
