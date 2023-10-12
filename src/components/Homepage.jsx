import { Button } from "flowbite-react";
import NavigationMenu from "./Navigation";
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
          <Button>View our destinations</Button>
          <Button>About us.</Button>
        </div>

      </div>

    </section>
  </main>
)
export default Homepage;
