import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoLogoModelS } from "react-icons/io";
import { CgBmw } from "react-icons/cg";
import { IoIosColorPalette } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";

const Cardetails = ({
  make,
  model,
  mileage,
  year,
  transmission,
  n_of_seats,
  n_of_doors,
  colour,
}: {
  make: string;
  model: string;
  mileage: string;
  year: string;
  transmission: string;
  n_of_seats: string;
  n_of_doors: string;
  colour: string;
}) => {
  return (
    <div className="flex flex-col p-5 items-center bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-xl max-w-md mx-auto w-full">
      <div className="w-full mb-4 pb-3 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800">Car Details</h2>
      </div>
      
      <div className="w-full space-y-2">
        {/* Make */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><CgBmw /></span>
            <span className="font-medium text-gray-700">Make</span>
          </div>
          <span className="font-bold text-gray-900">{make}</span>
        </div>
        
        {/* Model */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><IoLogoModelS /></span>
            <span className="font-medium text-gray-700">Model</span>
          </div>
          <span className="font-bold text-gray-900">{model}</span>
        </div>
        
        {/* Mileage */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><FaRoute /></span>
            <span className="font-medium text-gray-700">Mileage</span>
          </div>
          <span className="font-bold text-gray-900">{`${mileage} km`}</span>
        </div>
        
        {/* Registration Year */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><FaRegRegistered /></span>
            <span className="font-medium text-gray-700">Registration Year</span>
          </div>
          <span className="font-bold text-gray-900">{year}</span>
        </div>
        
        {/* Transmission */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><FaGears /></span>
            <span className="font-medium text-gray-700">Transmission</span>
          </div>
          <span className="font-bold text-gray-900">{transmission}</span>
        </div>
        
        {/* Seats */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><MdAirlineSeatReclineExtra /></span>
            <span className="font-medium text-gray-700">Seats</span>
          </div>
          <span className="font-bold text-gray-900">{n_of_seats}</span>
        </div>
        
        {/* Doors */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><GiCarDoor /></span>
            <span className="font-medium text-gray-700">Doors</span>
          </div>
          <span className="font-bold text-gray-900">{n_of_doors}</span>
        </div>
        
        {/* Color */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl"><IoIosColorPalette /></span>
            <span className="font-medium text-gray-700">Color</span>
          </div>
          <span className="font-bold text-gray-900">{colour}</span>
        </div>
      </div>
    </div>
  );
};

export default Cardetails;