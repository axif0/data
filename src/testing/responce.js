import React, { useState, useEffect } from 'react';

function Response() {
  const [rowCount, setRowCount] = useState(null);

  useEffect(() => {
    // Make a GET request to your Google Apps Script to fetch row count
    fetch('https://script.google.com/macros/s/AKfycbxrcUuy97rSwx-5riZwc6Gp_wD7yl7uzM5KxBuEzu8mIbU2AQebdwvWof3fHXkRnKf7/exec?tableName=form&action=getRowCount')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setRowCount(data.rowCount);
        } else {
          console.error(data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <div>
      <h2>Total Response in Google Sheet</h2>
      {rowCount !== null ? (
        <p>{rowCount} Response</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Response;
