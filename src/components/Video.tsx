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
    const transitionDuration = 500; // Duration of the transition in milliseconds
    const transitionTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1)"; // Cubic bezier timing function
  
    // Apply transition to the popup element
    const popupElement = document.getElementById("popup"); // Replace "popup" with the ID of your popup element
    popupElement.style.transition = `opacity ${transitionDuration}ms ${transitionTimingFunction}`;
    popupElement.style.opacity = '0';
  
    setTimeout(() => {
      setIsPopupOpen(false);
  
      // Remove the transition after it has finished
      setTimeout(() => {
        popupElement.style.transition = "";
      }, transitionDuration);
    }, transitionDuration);
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
          <div className={`popup-container ${isPopupOpen ? "open" : ""}`}
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
