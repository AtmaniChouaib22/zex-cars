import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Caritem = () => {
  return (
    <Link to={`#`}>
      <div className=" flex flex-col sm:h-72 sm:w-60 w-44 h-64 overflow-hidden shadow-md hover:shadow-zinc-800 rounded-md  bg-white transition duration-150 ease-out hover:ease-in hover:scale-105">
        <img
          className="h-auto w-full object-cover rounded-t-md"
          src="../src/assets/tesla.jpg"
        />
        <div className="p-2 flex flex-col gap-2 items-start">
          <div className="text-lg font-bold truncate">title</div>
          <div className="flex gap-1 items-center flex-wrap">
            <Badge variant={"secondary"}>milage</Badge>
            <Badge variant={"secondary"}>location</Badge>
            <Badge variant={"secondary"}>fuel type</Badge>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="p-2">price</div>
        </div>
      </div>
    </Link>
  );
};

export default Caritem;
