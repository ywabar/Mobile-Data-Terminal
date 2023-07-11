import React, { useState } from "react";

const indexClick = () => {
  window.location.href = "index.html";
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const openNavbar = () => {
    setIsOpen(true);
  };

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
      <div id="third">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation "
          onClick={openNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {isOpen && (
        <div
          id="offcanvasNavbar"
          className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div id="fourth">
            <div id="fourth-row">
              <img src="/favicon.png" alt="Logo" id="favicon" />
              <div id="fourth-column">
                <h1>Mobile Data</h1>
                <h1>Terminal</h1>
              </div>
            </div>

            <div id="fourth-exit">
              <button
                type="button"
                className="btn-close white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={closeNavbar}
              ></button>
            </div>
          </div>
          <hr />
          <ul>
            <li className="navbar-nav">
              <a className="nav-link active" href="index">
                Home
              </a>
            </li>
            <li className="navbar-nav">
              <a className="nav-link active" href="mdt.html">
                Mobile Data Terminal
              </a>
            </li>
            <li className="navbar-nav">
              <a className="nav-link active" href="cad.html">
                Computer Aided Dispatch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
