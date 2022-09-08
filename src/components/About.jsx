import React from "react";

export default function About(props) {
  document.title = props.title;
  const applyStyle = {
    color: props.mode === "light" ? "#061019" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#061019",
    border: "1px solid",
    borderColor: "white",
  };

  return (
    <div
      className="container"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={applyStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collased"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={applyStyle}>
              NewsLive
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={applyStyle}>
              NewsLive is a website for daily updates about local news of Silchar, Assam. If you are interested
              in sports, entertainment, business, politics, health news, stay tuned with us!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={applyStyle}>
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={applyStyle}>
              NewsLive is a free to use tool and can be used by anyone to
              get daily news updates.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={applyStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={applyStyle}>
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={applyStyle}>
              NewsLive is compatible with any browser such as Chrome,
              Firefox, Internet Explorer, Safari, Opera. It is helpful is
              counting characters for facebook, twitter, blogs, books, pdf
              documents, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
