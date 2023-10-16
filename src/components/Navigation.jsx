import { useState } from "react";


const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger-menu">
        <button
          className={`hamburger-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        {isOpen && (
          <nav className="navbar mobile">
          <ul className="nav-elements">
            <div className="left">
              Logo
            </div>
            <div className="right">
              <li>Home</li>
              <li>About</li>
              <li>Destinations</li>
              <li>Journeys</li>
              <li>Contact us</li>
            </div>
          </ul>
        </nav>
        )}
      </div>
      <nav className="navbar desktop">
        <ul className="nav-elements">
          <div className="left">
            Logo
          </div>
          <div className="right">
            <li>Home</li>
            <li>About</li>
            <li>Destinations</li>
            <li>Journeys</li>
            <li>Contact us</li>
          </div>
        </ul>
      </nav>
    </>
  )

};
export default NavigationMenu;
