import about from "../assets/about.jpg";
import aboutImg from "../assets/bmw-offer.png";
import drive from "../assets/drive.png";
const About = () => {
  return (
    <>
      <div className="">
        <img src={about} alt="" className=" w-screen h-64 object-fill" />
        <h1 className="text-zinc-200 text-6xl flex justify-center items-center -pb-10">
          About Us
        </h1>
      </div>
      <section className="bg-gradient-to-b from-black to-zinc-700 text-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="about__section-content">
              <h2 className="text-4xl font-bold mb-4">
                Welcome to car rent service
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item flex items-center mb-4">
                <p className="text-lg text-gray-200 flex items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>

                <p className="text-lg text-gray-200 flex items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>
              </div>

              <div className="about__section-item flex items-center">
                <p className="text-lg text-gray-200 flex items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>

                <p className="text-lg text-gray-200 flex items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>
              </div>
            </div>

            <div className="bg-transparent">
              <img src={aboutImg} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-black to-zinc-700 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="about__page-img">
              <img src={drive} alt="" className="w-full rounded-3" />
            </div>

            <div className="about__page-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">
                We Are Committed To Provide Safe Ride Solutions
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-2xl text-white">
                  <i className="ri-phone-line"></i>
                </span>

                <div>
                  <h6 className="text-lg font-semibold text-zinc-200">Need Any Help?</h6>
                  <h4 className="text-xl text-white">+2130909090</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-20 bg-gradient-to-b from-black to-zinc-700"></div>
    </>
  );
};

export default About;
