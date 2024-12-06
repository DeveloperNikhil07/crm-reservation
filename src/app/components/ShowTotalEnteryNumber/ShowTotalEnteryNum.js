// components/TotalEntries.js
import React from 'react';

const TotalEntries = ({ displayedRows, leadBookingData }) => {
  return (
    <div className="total-list">
      <p>
      Showing <span className="current-data">{displayedRows.length}</span> of <span className="total-data">{leadBookingData.length}</span> entries

      </p>
      
      <p>
         {/* Current page data */}
      </p>
    </div>
  );
};

export default TotalEntries;
