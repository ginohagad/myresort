import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const BookMenu = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bookmenu">
      <h3>Start Booking Here</h3>
      <div className="book-items">
        <div className="bm-dates">
          <h2>Dates</h2>
          <ul>
            <li>
              <p>Check in</p>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </li>
            <li>
              <p>Check out</p>
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </li>
          </ul>
        </div>
        <div className="bm-guests">
          <h2>Guests</h2>
          <ul>
            <li>No. of adults (8)</li>
            <li>No. of children (8)</li>
          </ul>
        </div>
        <div className="bm-rooms">
          <h2>Rooms (10)</h2>
        </div>
        <button className="search">Search</button>
      </div>
    </div>
  )
}


export default BookMenu;
