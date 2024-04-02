import { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import Cardetails from "@/components/custom/Cardetails";
import Carperformence from "@/components/custom/Carperformence";
import { fetchSingleCar, buyCar } from "@/lib/fetchUtils";
import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { SlLocationPin } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa";

const CardetailsPage = () => {
  const { isLoading, setIsLoading, err, setError } = useContext(appContext);
  const [car, setCar] = useState({});
  const [paymentmethod, setPaymentMethod] = useState("cash");

  const urlparse = window.location.pathname.split("/");
  const id = urlparse[2];

  // buy car
  const buy = async () => {
    setIsLoading(true);
    try {
      setError(null);
      const response = await buyCar(car.id, paymentmethod);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 404) {
        setError("Car not found");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
  useEffect(() => {
    const fetchCar = async () => {
      setIsLoading(true);
      try {
        setError(null);
        const response = await fetchSingleCar(id);
        setCar(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 404) {
          setError("Car not found");
        } else {
          setError("An unexpected error occurred");
        }
      }
    };
    fetchCar();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <RiseLoader color="#09090b" size={10} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row sm:py-10 py-5 sm:px-16 px-3 gap-4 ">
          <div className="w-full md:w-1/2  bg-white px-4 rounded-lg shadow-xl">
            <img
              className="w-full h-auto"
              src={`../uploads/cars/${car.image}`}
              alt="car image"
            />
            <div className="flex flex-col py-2">
              <h1 className="text-lg font-bold">{car.title}</h1>
              <div className="flex justify-between flex-wrap">
                <div className="flex items-center gap-1">
                  <FaDollarSign />
                  {car.price}
                </div>
                <div className="font-bold flex items-center gap-1 flex-wrap">
                  <SlLocationPin />
                  {car.location}
                </div>
              </div>
              <div>
                <Badge
                  className={clsx({
                    "bg-green-500 hover:bg-green-600":
                      car.status === "available",
                    "bg-red-500 hover:bg-red-600": car.status === "sold",
                  })}
                >
                  {car.status}
                </Badge>
                <div className="">
                  <span className="text-lg font-bold">Description</span>
                  <p className="text-zinc-700 pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quaerat fugit quia minus ab impedit quod quidem
                    excepturi, molestias, ratione provident odit distinctio nemo
                    dolores at soluta, autem asperiores harum!
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-zinc-800 text-white hover:bg-zinc-900">
                      Buy
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Confirm Purchase</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <Label htmlFor="payment_method">Payment method</Label>
                        <select
                          id="payment_method"
                          value={paymentmethod}
                          className="cursor-pointer w-full sm:w-3/4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                          <option value="cash" className="cursor-pointer">
                            Cash
                          </option>
                          <option
                            value="credit_card"
                            className="cursor-pointer"
                          >
                            Credit Card
                          </option>
                        </select>
                      </div>
                    </div>
                    <DialogFooter>
                      {isLoading ? (
                        <RiseLoader size={10} color="#09090b" />
                      ) : (
                        <Button
                          type="submit"
                          onClick={buy}
                          className="bg-zinc-800 text-white hover:bg-zinc-900"
                        >
                          Confirm
                        </Button>
                      )}
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-3">
              <Cardetails
                make={car.make}
                model={car.model}
                mileage={car.mileage}
                year={car.year}
                colour={car.colour}
                n_of_doors={car.n_of_doors}
                n_of_seats={car.n_of_seats}
                transmission={car.transmission}
              />
            </div>
            <Carperformence
              engine_capacity={car.engine_capacity}
              fuel_tank_capacity={car.fuel_tank_capacity}
              fuel_type={car.fuel_type}
              gears={car.gears}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardetailsPage;
