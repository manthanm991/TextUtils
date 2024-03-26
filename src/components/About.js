import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The application offers several functionalities:
              <ul>
                <li>Capitalize Text: Converts the text to uppercase.</li>
                <li>Lowercase Text: Converts the text to lowercase.</li>
                <li>
                  Remove Extra Spaces: Removes any extra spaces from the text.
                </li>
                <li>Copy Text: Allows users to copy the modified text.</li>
                <li>Clear Text: Clears the text area.</li>
                <li>Word Counter: Displays the number of words in the text.</li>
                <li>
                  Estimated Reading Time: Calculates and displays the estimated
                  time required to read the text.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This provides information about the accessibility of the
              application. It emphasizes that the application is freely
              available for use by anyone. Users can access all the features
              without any cost or subscription fees. Additionally, it may
              mention any community support or contributions that enhance the
              application's usability and availability.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This highlights the compatibility of the application with
              different web browsers. It assures users that the application
              works seamlessly across popular browsers such as Google Chrome,
              Mozilla Firefox, Safari, Microsoft Edge, etc. Users can
              confidently use the application on their preferred browser without
              encountering compatibility issues. Additionally, it may mention
              any specific browser versions that are supported or recommended
              for optimal performance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
