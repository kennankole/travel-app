import NavigationMenu from "./Navigation";
import { FaMapMarked, FaRoute } from 'react-icons/fa';
// import { RiUser6Fill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineFamilyRestroom } from 'react-icons/md'

import '../index.css';

const Homepage = () => (
  <main>
    <NavigationMenu />
    <section className="landing-page">
      <div className="home-container">
        <h1 className="leading-text">Welcome to Sense of Africa</h1>
        <h3 className="home-subtitle">Come journey Africa with us…</h3>
        <p className="home-para">
          Sense of Africa is the leading inbound destination management company in Africa.
          With offices in Namibia, South Africa, Kenya, Tanzania, Botswana, and Uganda,
          our expert travel consultants are able to specialise and offer your clients the private guided,
          self-drive, FIT and group travel services and products they deserve.
        </p>
        <div className="home-buttons">
          <button type="button" className="home-button">View our destinations</button>
          <button type="button" className="home-button">About us.</button>
        </div>
      </div>
    </section>
    <section className="card-section">
      <div className="card-container">
        <div className="cards">
          <div className="icon-container">
            <FaRoute className="icon" />
          </div>
          <h3 className="icon-title">Travel Planning</h3>
          <div className="icon-text">
            <p className="icon-para">
              Expertise travel planning from our well knowledge local consultants.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="icon-container">
            <FaMapMarked className="icon" />
          </div>
          <h3 className="icon-title">Tailor-made Tours</h3>
          <div className="icon-text">
            <p className="icon-para">
              Travel the way you want to travel
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="icon-container">
            <AiFillCar className="icon" />
          </div>
          <h3 className="icon-title">Transportaion</h3>
          <div className="icon-text">
            <p className="icon-para">
              On the road to discover your destination’s many secrets
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="icon-container">
            <MdOutlineFamilyRestroom className="icon" />
          </div>
          <h3 className="icon-title">Family Friendly</h3>
          <div className="icon-text">
            <p className="icon-para">
              The quintessential African family holiday
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
)
export default Homepage;
