import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const PendingCarItem = ({
  title,
  id,
  status,
  price,
  mileage,
  location,
  fuel_type,
  image,
  admin,
  handleSetCarToAvailable,
  handleSetCarToRefused,
}: {
  title: string;
  id: string;
  status: string;
  price: number;
  mileage: number;
  location: string;
  fuel_type: string;
  image: string;
  admin: boolean;
  handleSetCarToAvailable: (id: string) => void;
  handleSetCarToRefused: (id: string) => void;
}) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md shadow-zinc-400 overflow-hidden m-3 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="sm:p-6 p-2 flex flex-col justify-between items-center h-full">
        <div className="flex-shrink-0 sm:w-full w-full">
          <img
            className="w-full sm:h-32 object-cover h-full rounded-xl"
            src={`../uploads/cars/${image}`}
            alt="car image"
          />
        </div>
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold py-1">
            <Badge
              className={clsx({
                "bg-green-500 hover:bg-green-600": status === "available",
                "bg-red-500 hover:bg-red-600": status === "sold",
              })}
            >
              {status}
            </Badge>
          </div>
          <div>
            <Badge variant={"secondary"}>{fuel_type}</Badge>
            <Badge variant={"secondary"}>{mileage} km</Badge>
            <Badge variant={"secondary"}>{location}</Badge>
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </div>
        </div>
        <div className="mt-4 sm:mt-0 text-sm text-gray-700">
          <p>{`Price: $ ${price}`}</p>
        </div>
        {admin && (
          <>
            {
              <div className="flex flex-wrap gap-2">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  size={"sm"}
                  onClick={() => handleSetCarToAvailable(id)}
                >
                  Set Available
                </Button>
                <Button
                  variant={"destructive"}
                  size={"sm"}
                  onClick={() => handleSetCarToRefused(id)}
                >
                  Set Refused
                </Button>
              </div>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default PendingCarItem;
