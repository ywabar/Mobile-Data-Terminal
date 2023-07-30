const indexClick = () => {
  window.location.href = "index.html";
};

interface NavbarProps {
  identifier?: string;
}

const Navbar_MDT: React.FC<NavbarProps> = ({ identifier }) => {
  return (
    <nav id="navbar">
      <div id="header">
        <div id="first" onClick={indexClick}>
          <img src="/favicon.png" alt="Logo" id="favicon" />
        </div>
        <div id="second" onClick={indexClick}>
          <h1>Mobile Data</h1>
          <h1>Terminal</h1>
        </div>
      </div>
      <div className="NavbarIdentifier">
        {identifier}
        <button onClick={indexClick} className="btn btn-light NavbarButton">
          Go Back
        </button>
      </div>
    </nav>
  );
};

export default Navbar_MDT;
