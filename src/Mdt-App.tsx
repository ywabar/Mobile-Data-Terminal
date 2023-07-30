import { useState, useEffect } from "react";
import Alert from "./components/Alert";
// import Button from "./Button.tsx";
import GetStartedPopup from "./components/GetStartedPopup.tsx";
import Identifier from "./components/Identifier.tsx";
import Navbar_MDT from "./components/Navbar_MDT.tsx";
import Status from "./components/status.tsx";
import Extra from "./components/Mdt-Extra.tsx";
import Event from "./components/Event.tsx";
import { MongoClient } from "mongodb";

// async function logUnits() {
//   const uri =
//     "mongodb+srv://admin:bKaTuYtv0zzb92nU@database.oydzvns.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     const database = client.db("Units");
//     const collection = database.collection("Units");

//     const unitsData = await collection.find({}).toArray();
//     console.log(unitsData);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     await client.close();
//   }
// }

// logUnits();

function App() {
  //var ErrorMessage = "There has been an internal error.";
  var [ErrorMessage, setErrorMessage] = useState(
    "There has been an internal error"
  );
  const [alertVisible, setAlertVisiblity] = useState(false);
  const handleButtonAlert = () => {
    setAlertVisiblity(false);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [identifier, setIdentifier] = useState("");
  const [status, setStatus] = useState("Out of Service");
  var [focus, setFocus] = useState("Event");
  const [log, addLog] = useState(Array);
  const [location, changeLocation] = useState("N/A");
  const [description, changeDescription] = useState("N/A");
  const [title, changeTitle] = useState("N/A");
  const [id, changeID] = useState("N/A");

  const handleIdentifierChange = (value: string) => {
    setIdentifier(value);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  const handleFocusChange = (value: string) => {
    setFocus(value);
  };
  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  const closePopup = () => {
    if (identifier.length == 3) {
      console.log(identifier);
      setIsPopupOpen(false);
    } else {
      setErrorMessage("Please reenter a valid identifier.");
      setAlertVisiblity(true);
    }
    //setIsPopupOpen(false);
    //console.log(identifier);
  };

  useEffect(() => {
    console.log(identifier);
  }, [identifier]);
  return (
    <div id="mdtbackground">
      {isPopupOpen && (
        <GetStartedPopup
          heading="Please enter a valid identifier"
          icon="terminal.png"
        >
          <Identifier
            identifier={identifier}
            closePopup={closePopup}
            onIdentifierChange={handleIdentifierChange}
          ></Identifier>
        </GetStartedPopup>
      )}
      <Navbar_MDT identifier={identifier}></Navbar_MDT>
      <div>
        {alertVisible && (
          <Alert onClick={handleButtonAlert}>Error: {ErrorMessage}</Alert>
        )}
      </div>
      <Status status={status} onStatusChange={handleStatusChange}></Status>
      <Extra focus={focus} onFocusChange={handleFocusChange}></Extra>
      <div id="breakline">
        <br></br>
        <hr></hr>
      </div>
      {focus == "Event" && (
        <Event
          location={location}
          description={description}
          title={title}
          id={id}
        ></Event>
      )}
    </div>
  );
}

export default App;
