import { Link } from "react-router-dom";

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
const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-t from-black to-zinc-700 pb-12 pt-1">
        <div className="flex justify-center items-center flex-col ">
          <h2 className="text-3xl mt-40 font-bold text-white">Customer care</h2>
          <p className="text-zinc-200 sm:text-6xl text-center text-xl mb-10">
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
                className="bg-zinc-400 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 mb-5"
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
              <div className="flex items-center flex-wrap mb-2">
                <h6 className="font-semibold mr-2">Phone:</h6>
                <p className="text-gray-600">+88683896366</p>
              </div>
              <div className="flex items-center mb-4 flex-wrap">
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
      <div className="bg-gradient-to-t from-black to-zinc-700 text-white">
        <div className="flex justify-center items-center flex-col pb-20">
          <h2 className="text-3xl mt-40 font-bold">Our Call Centres</h2>
          <p className="text-zinc-200 sm:text-6xl text-center text-xl mb-10">
            If you need anything else, please be in touch
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between flex-col sm:flex-row items-center gap-8 px-10 sm:px-24 ">
          <div>
            <h1 className="font-bold text-xl">ZEXCARS</h1>
          </div>

          <div className="flex flex-col flex-wrap sm:flex-row sm:gap-5 justify-center ">
            <div className="flex justify-center items-center">
              <i className="ri-global-line pr-2 text-2xl"></i>
              <h3 className="shrink-0">Algeria</h3>
              <p className="shrink-0">Constantine, Algeria</p>
            </div>
            <div className="flex justify-center items-center">
              <i className="ri-time-line pr-2 text-2xl"></i>
              <h3 className="shrink-0">Sunday to Friday</h3>
              <p className="shrink-0">10am - 7pm</p>
            </div>
          </div>

          <div className="flex flex-nowrap justify-center items-center bg-zinc-500  py-2 min-w-40 rounded-md ">
            <i className="ri-phone-fill pr-3 text-2xl pl-2"></i>
            <p className="text-center w-full">Request a call</p>
          </div>
        </div>
      </div>
      <div className="h-40 bg-gradient-to-b from-black to-zinc-700"></div>
    </>
  );
};

export default Contact;
