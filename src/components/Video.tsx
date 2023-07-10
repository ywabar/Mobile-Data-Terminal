import { useState } from "react";
import Button from "./Button.tsx";
import GetStartedPopup from "./GetStartedPopup.tsx";
import GetStarted from "./GetStarted.tsx";

function Video() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background">
        <source src="./public/index.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <div id="overlayinfo">
          Redefining Safety
          <Button color="light" onClick={openPopup}>
            Get Started
          </Button>
          {isPopupOpen && (
            <GetStartedPopup
              closePopup={closePopup}
              heading="Choose From The Following"
              icon="terminal.png"
            >
              <GetStarted></GetStarted>
            </GetStartedPopup>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;