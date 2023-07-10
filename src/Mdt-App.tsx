import { useState } from "react";
import Alert from "./components/Alert";
// import Button from "./Button.tsx";
import GetStartedPopup from "./components/GetStartedPopup.tsx";
import Identifier from "./components/Identifier.tsx";

var identifier = "";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  const handleButtonAlert = () => {
    setAlertVisiblity(false);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  const closePopup = () => {
    setIsPopupOpen(false);
    console.log(identifier);
  };
  return (
    <div>
      {isPopupOpen && (
        <GetStartedPopup
          heading="Please enter a valid identifier"
          icon="terminal.png"
        >
          <Identifier
            identifier={identifier}
            closePopup={closePopup}
          ></Identifier>
        </GetStartedPopup>
      )}
      <div>
        {alertVisible && (
          <Alert onClick={handleButtonAlert}>
            Error: There has been an internal error.
          </Alert>
        )}
      </div>
    </div>
  );
}

export default App;
