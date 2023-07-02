import Icon_Text from "./Icon_Text";

function IndexService() {
  return (
    <div id="IndexService">
      <div className="Header">
        <h1>Services</h1>
        <hr></hr>
        <div className="info">We provide services to people like you!</div>
        <div className="infotwo">We do everything in house.</div>
        <Icon_Text icon="check.png">
          Great source of communication through call assignments for first
          responders.
        </Icon_Text>
        <Icon_Text icon="check.png">
          Reliable and efficient way of staying connected.
        </Icon_Text>
        <Icon_Text icon="check.png">
          Intuitive way to keep logged information for future reports.
        </Icon_Text>
      </div>
      <div className="Header">
        <img className="imageforheader" src="./src/assets/mdt-user.jpg"></img>
      </div>
    </div>
  );
}

export default IndexService;
