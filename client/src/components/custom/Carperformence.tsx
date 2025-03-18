import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import { PiEngineFill } from "react-icons/pi";
import { PiGasCanFill } from "react-icons/pi";

const Carperformence = ({
  engine_capacity,
  fuel_type,
  fuel_tank_capacity,
  gears,
}: {
  engine_capacity: string;
  fuel_type: string;
  fuel_tank_capacity: string;
  gears: string;
}) => {
  return (
    <div className="flex flex-col p-5 items-center bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-xl max-w-md mx-auto w-full">
      <div className="w-full mb-4 pb-3 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Car Performance
        </h2>
      </div>

      <div className="w-full space-y-2">
        {/* Engine Capacity */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl">
              <PiEngineFill />
            </span>
            <span className="font-medium text-gray-700">Engine Capacity</span>
          </div>
          <span className="font-bold text-gray-900">{`${engine_capacity} hp`}</span>
        </div>

        {/* Fuel Type */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl">
              <BsFillFuelPumpFill />
            </span>
            <span className="font-medium text-gray-700">Fuel Type</span>
          </div>
          <span className="font-bold text-gray-900">{fuel_type}</span>
        </div>

        {/* Fuel Tank Capacity */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl">
              <PiGasCanFill />
            </span>
            <span className="font-medium text-gray-700">
              Fuel Tank Capacity
            </span>
          </div>
          <span className="font-bold text-gray-900">{`${fuel_tank_capacity} L`}</span>
        </div>

        {/* Gears */}
        <div className="group bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-xl">
              <FaGears />
            </span>
            <span className="font-medium text-gray-700">Gears</span>
          </div>
          <span className="font-bold text-gray-900">{gears}</span>
        </div>
      </div>
    </div>
  );
};

export default Carperformence;
