import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Footer from "./components/Footer";
import IndexService from "./components/IndexService";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  const handleButtonAlert = () => {
    setAlertVisiblity(false);
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        {alertVisible && (
          <Alert onClick={handleButtonAlert}>
            Error: There has been an internal error.
          </Alert>
        )}
        <Video></Video>
        <IndexService></IndexService>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
