import "../customstyles/custome.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <ul className="social">
            <li>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
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
                placeholder="your message"
              ></textarea>
              <button className="bg-zinc-900 hover:bg-zinc-950">Send</button>
            </form>
          </div>
          <hr />
          <div className="main-head">
            <h2>Our Call Centres</h2>
            <p>If you need anything else, please be in touch</p>
          </div>
          <div className="col">
            <div className="pl">
              <i className="fa-solid fa-user-clock"></i>
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

export default Contact;
