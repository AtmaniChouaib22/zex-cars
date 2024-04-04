import { useState, useEffect, useContext } from "react";
import {
  fetchWaitingCars,
  setCarToAvailable,
  setCarToRefused,
} from "../../lib/fetchUtils";
import { appContext } from "@/App";
import PendingCarItem from "./PendingCarItem";
import RiseLoader from "react-spinners/RiseLoader";

const PendingCarsPage = () => {
  const { user, isLoading, setIsLoading, err, setError } =
    useContext(appContext);
  const [waitingCars, setWaitingCars] = useState([]);

  const getWaitingCars = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const cars = await fetchWaitingCars();
      setWaitingCars(cars);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleSetCarToAvailable = async (id) => {
    try {
      await setCarToAvailable(id);
      getWaitingCars();
    } catch (error) {
      setError(error);
    }
  };

  const handleSetCarToRefused = async (id) => {
    try {
      await setCarToRefused(id);
      getWaitingCars();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setError(null);
    getWaitingCars();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <RiseLoader color="#09090b" size={10} />
        </div>
      ) : (
        <>
          <div>
            <div className="text-3xl text-center font-bold py-5">
              Waiting Cars
            </div>
            <div className="flex flex-wrap">
              {waitingCars.length > 0 ? (
                <>
                  {waitingCars.map((car) => (
                    <PendingCarItem
                      key={car.id}
                      title={car.title}
                      image={car.image}
                      status={car.status}
                      price={car.price}
                      admin={user.admin}
                      id={car.id}
                      fuel_type={car.fuel_type}
                      mileage={car.mileage}
                      location={car.location}
                      handleSetCarToAvailable={handleSetCarToAvailable}
                      handleSetCarToRefused={handleSetCarToRefused}
                    />
                  ))}
                </>
              ) : (
                <div className="text-center">No cars found</div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PendingCarsPage;
