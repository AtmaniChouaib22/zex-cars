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
import { Link } from "react-router-dom";
import ServicesList from "@/components/custom/Services";


const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];
const Home = () => {
  return (
    <>
      <div className="relative bg-black w-screen h-screen">
        <div className="absolute flex flex-col mt-48 h-36 w-full justify-between items-center z-10 text-white">
          <h1 className="text-6xl font-bold font-mono">BUYUNG OR SELLING?</h1>
          <p className="text-zinc-300 font-semibold">
            Quick. Easy. Simple. Sell your car today with immediate payment.
          </p>
        </div>
        <div className="absolute w-full mt-52 gap-52 h-full flex justify-center items-center z-10 text-white">
          <Link
            to="/sellcar"
            className="w-80 mr-10 font-semibold h-12 flex justify-center rounded-sm items-center text-center bg-zinc-800 hover:bg-zinc-950"
          >
            Sell
          </Link>
          <Link
            to="/buycar"
            className="w-80 h-12 font-semibold flex justify-center rounded-sm items-center text-center bg-zinc-400 hover:bg-zinc-950"
          >
            Buy
          </Link>
        </div>

        <video
          className="absolute flex justify-center self-center w-screen -z-1"
          autoPlay
          muted
          loop
        >
          <source src={landing} type="video/mp4" />
        </video>
      </div>

      <div className="bg-gradient-to-b from-black to-zinc-700">
        <div className="text-white  flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl mt-40 font-bold">SEE OUR</h2>
          <p className="text-zinc-200 text-6xl mb-10">Popular Services</p>
        </div>
        <div className="container">
          <ServicesList />
        </div>
      </div>

      <section className="bg-gradient-to-t from-black to-zinc-700 py-12">
        <div className="flex justify-center items-center flex-col ">
          <h2 className="text-3xl mt-40 font-bold text-white">Customer care</h2>
          <p className="text-zinc-200 text-6xl mb-10">
            We value your support and feedback.
          </p>
        </div>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 px-4">
            <h6 className="font-bold text-white text-xl mb-4">Get In Touch</h6>

            <form className="">
              <div className="mb-4">
                <input
                  className="w-full p-3 border bg-gradient-to-r from-zinc-50 to-zinc-300 border-gray-300 rounded-md outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-3 border bg-gradient-to-r from-zinc-50 to-zinc-300 border-gray-300 rounded-md outline-none focus:border-blue-500"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 border bg-gradient-to-r from-zinc-50 to-zinc-300 border-gray-300 rounded-md outline-none focus:border-blue-500"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                className="bg-zinc-400 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="bg-gradient-to-r from-zinc-50 to-zinc-300 p-6 rounded-md shadow-md">
              <h6 className="font-bold">Contact Information</h6>
              <p className="text-gray-600 mb-2">123 Constantone, Algeria</p>
              <div className="flex items-center mb-2">
                <h6 className="font-semibold mr-2">Phone:</h6>
                <p className="text-gray-600">+88683896366</p>
              </div>
              <div className="flex items-center mb-4">
                <h6 className="font-semibold mr-2">Email:</h6>
                <p className="text-gray-600">example@gmail.com</p>
              </div>

              <h6 className="font-bold mt-4">Follow Us</h6>

              <div className="flex gap-4 mt-3">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="text-zinc-500 hover:text-blue-600"
                  >
                    <i className={item.icon}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-b from-black to-zinc-700 text-white">
        <div className="flex justify-center items-center flex-col pb-20">
          <h2 className="text-3xl mt-40 font-bold">Our Call Centres</h2>
          <p className="text-zinc-200 text-6xl mb-10">
            If you need anything else, please be in touch
          </p>
        </div>
        <div className="flex justify-between mx-40 items-center">
          <div>
            <h1 className="font-bold text-xl">ZEXCARS</h1>
          </div>
          <div className="flex justify-center items-center">
            <i className="ri-global-line mr-2 text-2xl"></i>
            <div>
              <h3>Algeria</h3>
              <p>Constantine, Algeria</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <i className="ri-time-line mr-2 text-2xl"></i>
            <div>
              <h3>Sunday to Friday</h3>
              <p>10am - 7pm</p>
            </div>
          </div>
          <div className="flex justify-center items-center bg-zinc-500 px-10 py-2 rounded-md">
            <i className="ri-phone-fill mr-2 text-2xl"></i>
            <p>Request a call</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
