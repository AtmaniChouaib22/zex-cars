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
    <div className="flex flex-col p-4 items-center bg-white shadow-md rounded-lg ">
      <div className="text-2xl font-bold">Car Performence</div>
      <div className="w-full">
        <div className="border-b-2 border-zinc-900 flex justify-between px-2 flex-wrap sm:px-6  py-2">
          <div className="flex items-center gap-1">
            <PiEngineFill />
            Engine Capacity
          </div>
          <span className="font-bold">{`${engine_capacity} hp`}</span>
        </div>
        <div className="border-b-2 border-zinc-900 flex justify-between px-2 flex-wrap sm:px-6  py-2">
          <div className="flex items-center gap-1">
            <BsFillFuelPumpFill />
            Fuel Type
          </div>
          <span className="font-bold">{fuel_type}</span>
        </div>
        <div className="border-b-2 border-zinc-900  flex justify-between px-2 flex-wrap sm:px-6  py-2">
          <div className="flex items-center gap-1">
            <PiGasCanFill />
            Fuel Tank Capacity
          </div>
          <span className="font-bold">{`${fuel_tank_capacity} L`}</span>
        </div>
        <div className="border-b-2 border-zinc-900   flex justify-between px-2 flex-wrap sm:px-6  py-2">
          <div className="flex items-center gap-1">
            <FaGears />
            Gears
          </div>
          <span className="font-bold">{gears}</span>
        </div>
      </div>
    </div>
  );
};

export default Carperformence;
