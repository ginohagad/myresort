
const Navbar = () => {

  return (
    <nav className="navbar">
      <h2 id="logo" className="nav-items">MyResort</h2>
      <ul className="nav-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#book" className="button">Book Now</a></li>
      </ul>
    </nav>
  );
}



export default Navbar;
