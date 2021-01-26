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
            <li>
              <label for="list-adult">No. of adults:</label>
              <select name="adults" id="list-adult">
                  <option value="">--Please choose an option--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
              </select>
            </li>
            <li>
              <label for="list-children">No. of children:</label>
              <select name="children" id="list-children">
                  <option value="">--Please choose an option--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="bm-rooms">
          <h2>Rooms</h2>
          <label for="list-rooms">No. of Rooms:</label>
          <select name="rooms" id="list-rooms">
              <option value="">--Please choose an option--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
        </div>
        <div className="bm-search">
          <button className="search">Search</button>
        </div>
      </div>
    </div>
  )
}


export default BookMenu;
