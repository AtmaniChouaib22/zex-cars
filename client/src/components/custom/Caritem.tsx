import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const Caritem = ({
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
    <Link
      to={id}
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col w-full sm:max-w-[340px] h-full"
    >
      {/* Car Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`../uploads/cars/${image}`}
          alt={`${title} image`}
        />
        <Badge
          className={clsx(
            "absolute top-3 right-3 px-3 py-1 text-xs font-semibold",
            {
              "bg-green-500 hover:bg-green-600 text-white":
                status === "available",
              "bg-red-500 hover:bg-red-600 text-white": status === "sold",
              "bg-yellow-500 hover:bg-yellow-600 text-white":
                status === "pending",
            }
          )}
        >
          {status.toUpperCase()}
        </Badge>
      </div>

      {/* Car Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="text-xl font-bold text-blue-600 mb-3">
          ${price.toLocaleString()}
        </div>

        {/* Specifications */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200"
          >
            {mileage.toLocaleString()} km
          </Badge>
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200"
          >
            {fuel_type}
          </Badge>
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200"
          >
            {location}
          </Badge>
        </div>
      </div>

      {/* Admin Actions */}
      {admin && (
        <div className="p-4 pt-0 mt-auto">
          <div className="flex flex-wrap gap-2 justify-between">
            <Button
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                handleSetCarToAvailable(id);
              }}
            >
              Set Available
            </Button>
            <Button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                handleSetCarToRefused(id);
              }}
            >
              Set Refused
            </Button>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Caritem;
