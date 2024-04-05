import landing from "../assets/landing.mp4";
import { Button } from "@/components/ui/button";
import { FaCity } from "react-icons/fa";
import { MdOutlineNavigation } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <h1>Click your next</h1>
          <p>
            Quick. Easy. Simple. Sell your car today with immediate payment.
          </p>
          <div className="btn">
            <a id="sell" href="#">
              <span>SELL MY CAR</span>
              <BsFillPlayFill />
            </a>
            <a id="buy" href="#">
              <span>BUY A CAR</span>
              <BsFillPlayFill />
            </a>
          </div>
        </div>
        <video className="video-bg" autoPlay muted loop>
          <source src={landing} type="video/mp4" />
        </video>
      </div>

      <div className="services" id="services">
        <div className="container">
          <div className="main-heading">
            <h2>See Our</h2>
            <p>Popular Service</p>
          </div>
          <div className="service-content">
            <div className="serv-box">
              <MdOutlineNavigation />

              <div className="text">
                <h3>City Transfer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iure deleniti quo iusto quas
                </p>
              </div>
            </div>
            <div className="serv-box">
              <FaCity />
              <div className="text">
                <h3>Whole City Tour</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iure deleniti quo iusto quas
                </p>
              </div>
            </div>
            <div className="serv-box">
              <FaCar />
              <div className="text">
                <h3>Unlimited Miles Car Rental</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iure deleniti quo iusto quas
                </p>
              </div>
            </div>
            <div className="serv-box">
              <MdOutlineTimer />
              <div className="text">
                <h3>Fast & Easy Booking</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iure deleniti quo iusto quas
                </p>
              </div>
            </div>
            <div className="serv-box">
              <FaPlane />
              <div className="text">
                <h3>Airport Transfer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iure deleniti quo iusto quas
                </p>
              </div>
            </div>
            <div className="serv-box">
              <MdLocationPin />
              <div className="text">
                <h3>Many Pickup Location</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iure deleniti quo iusto quas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="main-head">
            <h2>Customer care</h2>
            <p>We value your support and feedback.</p>
          </div>
          <div className="col">
            <div className="pl">
              <BsFillPersonFill />
            </div>
            <div className="info">
              <span className="head">
                <strong>
                  To ensure our customers are given the best possible support,
                  WeBuyCars has implemented stringent measures to ensure total
                  customer satisfaction.
                </strong>
              </span>
              <p>
                Our customer care team exists to provide ongoing, excellent
                service and operates:<strong>Mondays</strong> to
                <strong>Fridays</strong>, from <strong>08:00</strong> to
                <strong>17:00</strong>.
              </p>
            </div>
          </div>
          <hr />
          <div className="main-head">
            <h2>Talk to us</h2>
            <p>Complete the relevant form below to get in touch.</p>
          </div>
          <div className="content">
            <form action="" method="get">
              <input
                className="main-input"
                type="text"
                name="name"
                placeholder="your name"
              />
              <input
                className="main-input"
                type="email"
                name="email"
                placeholder="your email"
              />
              <textarea
                className="main-input"
                name="message"
                placeholder="your message"></textarea>
              <Button className="bg-zinc-900 hover:bg-zinc-950">Send</Button>
            </form>
          </div>
          <hr />
          <div className="main-head">
            <h2>Our Call Centres</h2>
            <p>If you need anything else, please be in touch</p>
          </div>
          <div className="col">
            <div className="pl">
              <BsPersonFillCheck />
            </div>
            <div className="info">
              <span className="head">
                <p>
                  Customer care call centre: <strong>087 057 0000</strong>
                </p>
                <p>
                  Customer care email:
                  <strong>customercare@webuycars.co.za</strong>
                </p>
              </span>
              <p>
                Our customer care team exists to provide ongoing, excellent
                service and operates:<strong>Mondays</strong> to
                <strong>Fridays</strong>, from <strong>08:00</strong> to
                <strong>17:00</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
