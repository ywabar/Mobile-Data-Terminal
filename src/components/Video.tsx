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
        <source src="/index.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <div id="overlayinfo">
          Redefining Safety
          <Button color="light" onClick={openPopup}>
            Get Started
          </Button>
          <div
            className={`popup-container ${isPopupOpen ? "open" : ""}`}
            style={{
              transition: "opacity 0.4s cubic-bezier(0.42, 0, 0.58, 1)",
              opacity: isPopupOpen ? 1 : 0,
            }}
          >
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
    </div>
  );
}

export default Video;
