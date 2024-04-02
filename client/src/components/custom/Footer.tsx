import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-4 mt-6 ">
      <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h5 className="font-bold">ZEX CARS</h5>
          <p className="mb-4">Constantine, ALGERIA</p>
          <p>© {new Date().getFullYear()} ZEX CARS. All rights reserved.</p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4 items-center">
          <Link to="about" className="hover:text-gray-300">
            Terms of Service
          </Link>
          <Link to="about" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link
            to="https://github.com/AtmaniChouaib22/zex-cars"
            className="hover:text-gray-300 flex items-center gap-2"
          >
            Github
            <FaGithub fontSize={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
