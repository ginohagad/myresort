

const BookMenu = () => {
  return (
    <div className="bookmenu">
      <h3>Start Booking Here</h3>
      <div className="book-items">
        <div className="bm-dates">
          <h2>Dates</h2>
          <ul>
            <li>Check in date</li>
            <li>Check out date</li>
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
