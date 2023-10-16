import { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggelDropDown = () => {
    setDropDown(!dropDown);
  }

  console.log(isOpen)
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
                <li className="nav-links-mobile">
                  <div className="drop-down-mobile">
                    <a>
                      Destinations
                    </a>
                    <div>
                      {dropDown ? (
                        <FaAngleDown className="drop-down-btn" onClick={toggelDropDown} />
                      ) : (
                        <FaAngleUp className="drop-down-btn" onClick={toggelDropDown} />
                      )}

                    </div>
                  </div>
                  <div className="destination-dropdown-mobile">
                    {isOpen && dropDown && (destinations)}
                  </div>
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
                  {dropDown ? (
                    <FaAngleDown className="drop-down-btn" onClick={toggelDropDown} />
                  ) : (
                    <FaAngleUp className="drop-down-btn" onClick={toggelDropDown} />
                  )}

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
        {isOpen === false && dropDown && (destinations)}
      </div>
    </>
  )

};
export default NavigationMenu;
