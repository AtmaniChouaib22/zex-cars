import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import clsx from "clsx";
const Cardeal = ({
  title,
  image,
  confirmed,
  price,
  status,
  admin,
  id,
  handleConfirmDeal,
  handleRejectDeal,
}: {
  title: string;
  image: string;
  confirmed: string;
  price: number;
  status: string;
  admin: boolean;
  id: string;
  handleConfirmDeal: (id: string) => void;
  handleRejectDeal: (id: string) => void;
}) => {
  return (
    <div className="w-72 flex flex-col  bg-white rounded-xl shadow-md overflow-hidden m-3">
      <div className="p-6 flex flex-col gap-5 items-center">
        <div className="flex-shrink-0 sm:w-full w-full">
          <img
            className="w-full sm:h-32 object-cover h-full rounded-xl"
            src={`../uploads/cars/${image}`}
            alt="car image"
          />
        </div>
        <div>
          <div className="uppercase tracking-wide text-sm font-semibold">
            <Badge
              className={clsx({
                "bg-green-500 hover:bg-green-600":
                  status === "available" || confirmed === "confirmed",
                "bg-red-500 hover:bg-red-600":
                  status === "sold" || confirmed === "rejected",
              })}
            >
              {confirmed || status}
            </Badge>
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-zinc-900 hover:underline">
            {title}
          </div>
        </div>
        <div className="mt-4 sm:mt-0 text-sm text-gray-700">
          <p>{`Price: $ ${price}`}</p>
        </div>
        {admin && (
          <div className="flex flex-wrap gap-2">
            <Button
              className="bg-green-500 hover:bg-green-600"
              size={"sm"}
              onClick={() => handleConfirmDeal(id)}
            >
              Confirm
            </Button>
            <Button
              variant={"destructive"}
              size={"sm"}
              onClick={() => handleRejectDeal(id)}
            >
              Reject
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardeal;
