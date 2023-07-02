import Icon_Text from "./Icon_Text.tsx";
import GetStartedPopup from "./GetStartedPopup.tsx";
import { useState } from "react";
import Error from "./Error.tsx";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div id="footer">
      {isPopupOpen && (
        <GetStartedPopup
          closePopup={closePopup}
          heading="Error"
          icon="error.png"
        >
          <Error></Error>
        </GetStartedPopup>
      )}
      <div className="firstfooter">
        <img src="./public/favicon.png" alt="Logo" />
        <h1>Mobile Data Terminal</h1>
      </div>
      <div className="secondfooter">
        <div className="second-footer1">
          <h1>Contact</h1>
          <Icon_Text icon={"email.png"}>
            <a href="mailto:ywabar3@gmail.com">ywabar3@gmail.com</a>
          </Icon_Text>
          <Icon_Text icon={"github.png"}>
            <a href="https://github.com/ywabar">github.com/ywabar</a>
          </Icon_Text>
        </div>
        <div className="second-footer1">
          <h1>Helpful Information</h1>
          <Icon_Text icon={"resume.png"} onClick={openPopup}>
            Privacy Policy
          </Icon_Text>
        </div>
        <div className="second-footer1">
          <h1>Other</h1>
          <Icon_Text icon={"owner.png"}>Created by Yemaj</Icon_Text>
        </div>
      </div>
    </div>
  );
}

export default Footer;
