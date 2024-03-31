import { useState, useEffect, useContext } from "react";
import { appContext } from "@/App";
import Caritem from "@/components/custom/Caritem";
import { fetchAvailableCars } from "@/lib/fetchUtils";
import RiseLoader from "react-spinners/RiseLoader";
import clsx from "clsx";

const BuyPage = () => {
  const { isLoading, setIsLoading, error, setError } = useContext(appContext);
  const [availablecars, setAvailableCars] = useState([]);
  useEffect(() => {
    const getCars = async () => {
      setIsLoading(true);
      try {
        const cars = await fetchAvailableCars();
        setAvailableCars(cars);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    getCars();
  }, []);
  return (
    <div
      className={clsx(
        "p-5",
        isLoading && "flex justify-center h-full items-center"
      )}
    >
      {error && (
        <div className="text-3xl text-center ">Something went wrong</div>
      )}
      {isLoading && <RiseLoader color="#09090b" size={10} />}
      {availablecars.length > 0 && (
        <div className="flex flex-wrap">
          {availablecars.map((car) => (
            <Caritem
              title={car.title}
              id={car.id}
              key={car.id}
              status={car.status}
              price={car.price}
              mileage={car.mileage}
              location={car.location}
              fuel_type={car.fuel_type}
              image={car.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyPage;
