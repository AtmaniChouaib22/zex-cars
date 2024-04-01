import { Badge } from "../ui/badge";
const Cardeal = ({
  title,
  image,
  confirmed,
  price,
  status,
}: {
  title: string;
  image: string;
  confirmed: boolean;
  price: number;
  status: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden m-3">
      <div className="p-6 flex flex-col justify-between items-center">
        <div className="flex-shrink-0 sm:w-full w-full">
          <img
            className="w-full sm:h-32 object-cover h-full"
            src={`../uploads/cars/${image}`}
            alt="car image"
          />
        </div>
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <Badge>{confirmed || status}</Badge>
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </div>
        </div>
        <div className="mt-4 sm:mt-0 text-sm text-gray-700">
          <p>{`Price: $ ${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardeal;
