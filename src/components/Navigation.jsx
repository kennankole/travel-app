import { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Link } from "react-router-dom";

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
    <div className="destination-ul">
      <ul className="dropdown-link">
        <li className="nav-links"><Link to="kenya">Kenya</Link></li>
        <li className="nav-links"><Link to="south-africa">South Africa</Link></li>
        <li className="nav-links"><Link to="europe">Europe</Link></li>
        <li className="nav-links"><Link to="dubai">Dubai</Link></li>
      </ul>
    </div>
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
                <li className="nav-links-mobile">
                  <Link to="home">Home</Link>
                </li>
                <li className="nav-links-mobile"><Link to="about">About</Link></li>
                <li className="nav-links-mobile">
                  <div className="drop-down-mobile">
                    <Link to="destinations">
                      Destinations
                    </Link>
                    {dropDown ? (
                      <>
                        <FaAngleDown className="drop-down-btn" onClick={toggelDropDown} />
                      </>
                    ) : (
                      <FaAngleUp className="drop-down-btn" onClick={toggelDropDown} />
                    )}
                  </div>
                  <div className="destination-dropdown-mobile">
                    {isOpen && dropDown && (destinations)}
                  </div>
                </li>
                <li className="nav-links-mobile"><Link to="journeys">Journeys</Link></li>
                <li className="nav-links-mobile"><Link to="contact">Contact us</Link></li>
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
            <li className="nav-links">
              <Link to="home">Home</Link>
            </li>
            <li
              className="nav-links"
              onMouseEnter={toggelDropDown}
              onMouseLeave={toggelDropDown}
            >
              {dropDown ? (
                <div className="destination-icon">
                  <Link to="destination">
                    Destination
                  </Link>
                  <FaAngleDown className="drop-down-btn" />
                </div>
              ) : (
                <div className="destination-icon">
                  <Link to="destination">Destination</Link>
                  <FaAngleUp className="drop-down-btn" />
                </div>
              )}
              {dropDown && (
                <div className="drop-down">
                  {destinations}
                </div>
              )}
            </li>
            <li className="nav-links">
              <Link to="about">About</Link>
            </li>
            <li className="nav-links">
              <Link to="journeys">Journeys</Link>
            </li>
            <li className="nav-links">
              <Link to="gallery">Gallery</Link>
            </li>
            <li className="nav-links">
              <Link to="contact">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
};
export default NavigationMenu;
