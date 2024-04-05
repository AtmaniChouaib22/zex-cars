import "../customstyles/custome.css";
import image1 from "../assets/about1.jpg";
import image2 from "../assets/about2.jpg";
import image3 from "../assets/about3.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="header">
            <h1>The Easiest Way to Sell Your Car</h1>
            <p>As easy as 1, 2, 3.</p>
          </div>
          <div className="plan">
            <h2>
              <strong>We come to you</strong>
            </h2>
            <p>
              The quickest and easiest way to sell your car by far. Whether you
              are selling your car, motorbike, bakkie, boat, trailer, caravan
              and more - <span>We buy them all!</span>
            </p>
          </div>
          <div className="list-content">
            <div className="list">
              <i className="fa-solid fa-list-check"></i>
              <h3>the request of buying a car is controlled by admin</h3>
            </div>
            <div className="list">
              <i className="fa-solid fa-phone-volume"></i>
              <h3>We contact you within an hour.</h3>
            </div>
            <div className="list">
              <i className="fa-solid fa-car-side"></i>
              <h3>
                We come to you, inspect your car and finalise the deal with
                immediate payment.
              </h3>
            </div>
          </div>
          <div className="header">
            <h1>Exceptional Customer Service</h1>
            <p>You are our first priority.</p>
          </div>
          <div className="plan">
            <h2>
              <strong>Friendly, Personal Service</strong>
            </h2>
            <p>
              At WeBuyCars you, our valued customer, always comes first. We
              pride ourselves on high quality, professional and safe service to
              ensure a hassle-free experience for you. We do not make use of
              third parties or agents.
            </p>
          </div>
          <div className="list-img">
            <img src={image1} alt="img" />
            <img src={image2} alt="img" />
            <img src={image3} alt="img" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default About;
