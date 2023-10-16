import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa6';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggelDropDown = () => {
    setDropDown(!dropDown);
  }

  const destinations = (
    <ul className="destination-ul">
      <li className="nav-links">Kenya</li>
      <li className="nav-links">South Africa</li>
      <li className="nav-links">Europe</li>
      <li className="nav-links">Dubai</li>
    </ul>
  )
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
                <li className="nav-links-mobile"><a>Home</a></li>
                <li className="nav-links-mobile"><a>About</a></li>
                <li className="nav-links-mobile destination">
                  <a>Destinations</a>
                  <FaAngleDown className="drop-down-btn" />
                </li>
                <li className="nav-links-mobile"><a>Journeys</a></li>
                <li className="nav-links-mobile"><a>Contact us</a></li>
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
            <li className="nav-links"><a>Home</a></li>
            <li className="nav-links">
              <div className="drop-down">
                <a>
                  Destinations
                </a>
                <div>
                  <FaAngleDown color="white" onClick={toggelDropDown} />
                </div>
              </div>
            </li>
            <li className="nav-links"><a>About</a></li>
            <li className="nav-links"><a>Journeys</a></li>
            <li className="nav-links"><a>Contact us</a></li>
          </div>
        </ul>
      </nav>
      <div className="destination-dropdown">
        {dropDown && (destinations)}
      </div>
    </>
  )

};
export default NavigationMenu;
