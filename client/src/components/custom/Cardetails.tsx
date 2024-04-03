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
    <div className="flex flex-col p-4 items-center  bg-white shadow-md rounded-lg">
      <div className="text-2xl font-bold">Car Details</div>
      <div className="w-full">
        <div className="border-b-2 border-zinc-900  flex justify-between flex-wrap px-2 sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <CgBmw />
            Make
          </div>
          <span className="font-bold">{make}</span>
        </div>
        <div className="border-b-2 border-zinc-900  flex justify-between flex-wrap px-2 sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <IoLogoModelS />
            Model
          </div>
          <span className="font-bold">{model}</span>
        </div>
        <div className="border-b-2 border-zinc-900  flex justify-between flex-wrap px-2 sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <FaRoute />
            Mileage
          </div>
          <span className="font-bold">{`${mileage} km`}</span>
        </div>
        <div className="border-b-2 border-zinc-900   flex justify-between flex-wrap px-2 sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <FaRegRegistered />
            Registration Year
          </div>
          <span className="font-bold">{year}</span>
        </div>
        <div className="border-b-2 border-zinc-900 flex justify-between px-2 flex-wrap sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <FaGears />
            Transmission
          </div>
          <span className="font-bold">{transmission}</span>
        </div>
        <div className="border-b-2 border-zinc-900 flex justify-between px-2 flex-wrap sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <MdAirlineSeatReclineExtra />
            Seats
          </div>
          <span className="font-bold">{n_of_seats}</span>
        </div>
        <div className="border-b-2 border-zinc-900  flex justify-between px-2 flex-wrap sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <GiCarDoor />
            Doors
          </div>
          <span className="font-bold">{n_of_doors}</span>
        </div>
        <div className="border-b-2 border-zinc-900 flex justify-between px-2 flex-wrap sm:px-6 py-2">
          <div className="flex items-center gap-1">
            <IoIosColorPalette />
            Color
          </div>{" "}
          <span className="font-bold">{colour}</span>
        </div>
      </div>
    </div>
  );
};

export default Cardetails;
