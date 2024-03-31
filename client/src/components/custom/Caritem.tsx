import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Caritem = ({
  title,
  id,
  status,
  price,
  mileage,
  location,
  fuel_type,
  image,
}) => {
  return (
    <Link to={id}>
      <div className=" flex flex-col sm:h-72 sm:w-60 w-44 h-64 overflow-hidden shadow-md hover:shadow-zinc-800 rounded-md  bg-white transition duration-150 ease-out hover:ease-in hover:scale-105">
        <img
          className="h-auto w-full object-cover rounded-t-md"
          src={`../uploads/cars/${image}`}
        />
        <div className="p-2 flex flex-col gap-2 items-start">
          <div className="text-lg font-bold truncate">{title}</div>
          <div className="flex gap-1 items-center flex-wrap">
            <Badge variant={"secondary"}>{mileage}</Badge>
            <Badge variant={"secondary"}>{location}</Badge>
            <Badge variant={"secondary"}>{fuel_type}</Badge>
          </div>
        </div>
        <div className="flex sm:flex-col pl-2 border-t-2 border-zinc-950">
          <div className="p-2">{price}</div>
          <div>{status}</div>
        </div>
      </div>
    </Link>
  );
};

export default Caritem;
