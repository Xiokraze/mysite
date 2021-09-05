import React, { useState } from "react";

const OSPI = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showIDE, setShowIDE] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="projectDiv">
      <h2 className="projectTitle">OSP Inventory</h2>
      <button
        onClick={() => setShowLanguages(!showLanguages)}
        className="projectButton"
      >
        Languages
      </button>
      <div className={showLanguages ? "projectTextDiv" : "projectTextDivHide"}>
        <ul className={showLanguages ? "projectList" : "projectListHide"}>
          <li className="projectLanguagesli">C#</li>
          <li className="projectLanguagesli">JAVA</li>
          <li className="projectLanguagesli">.NET</li>
          <li className="projectLanguagesli">Python</li>
          <li className="projectLanguagesli">SQL</li>
          <li className="projectLanguagesli">XAML</li>
          <li className="projectLanguagesli">XML</li>
        </ul>
      </div>
      <button onClick={() => setShowIDE(!showIDE)} className="projectButton">
        IDE
      </button>
      <div className={showIDE ? "projectTextDiv" : "projectTextDivHide"}>
        <ul className={showIDE ? "projectList" : "projectListHide"}>
          <li className="projectLanguagesli">Android</li>
          <li className="projectLanguagesli">Eclipse</li>
          <li className="projectLanguagesli">Visual Studio Community 2019</li>
        </ul>
      </div>

      <button
        onClick={() => setShowSpecs(!showSpecs)}
        className="projectButton"
      >
        Specs
      </button>
      <div className={showSpecs ? "projectTextDiv" : "projectTextDivHide"}>
        <p className={showSpecs ? "projectText" : "projectTextHide"}>
          The front end is designed as a mobile application installed on an
          Android Zebra QR code scanning gun for Android Oreo 8.1. It was
          written using Visual Studio as a Xamarin.Forms application in C#,
          .Net, and XML/Xaml. The web service is written in Eclipse as a JAX-RS
          & Jersey with Maven project running Tomcat 8.5 in Java communicating
          with Oracle servers through SQL. A python script runs on the hosted
          server's task scheduler automating the sending of notification emails
          to the development team for proactive project maintenance.
        </p>
      </div>

      <button
        onClick={() => setShowSummary(!showSummary)}
        className="projectButton"
      >
        Summary
      </button>
      <div className={showSummary ? "projectTextDiv" : "projectTextDivHide"}>
        <p className={showSummary ? "projectText" : "projectTextHide"}>
          The OSP Inventory project was developed to completely overhaul and
          replace our company's inventory tracking system. It provides vastly
          improved warehouse inventory accountability, decreases the time for
          contractors to check material in/out at warehouses, provides a
          desperately needed, easy-to-use, graphical user interface, and equips
          us with enhanced analytical metrics data.
        </p>
      </div>
    </div>
  );
};

export default OSPI;
