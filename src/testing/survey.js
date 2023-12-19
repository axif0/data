import React from 'react';
import './survey.css'; // Import a CSS file for styling

function Survey() {
  return (
    <div className="survey-container">
      <div className="survey-content">
        <h1 className="survey-title">Take Our Survey</h1>
        <p className="survey-description">
          We value your feedback! Please take a moment to fill out our survey.
        </p>
        <div className="survey-iframe">
          <iframe
            title="Survey Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf6JGorcKOSUJ3ueLu3WVYnDKp5xElrCISTvuz4dEwhQudomQ/viewform?embedded=true"
            width="1640"
            height="4051"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
        <p className="survey-note">
          Thank you for participating in our survey. Your input is valuable to us!
        </p>
      </div>
    </div>
  );
}

export default Survey;
