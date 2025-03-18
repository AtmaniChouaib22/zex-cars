import { useState, useEffect, useContext } from "react";
import { appContext } from "@/App";
import Caritem from "@/components/custom/Caritem";
import { fetchAvailableCars } from "@/lib/fetchUtils";
import RiseLoader from "react-spinners/RiseLoader";

const BuyPage = () => {
  const { isLoading, setIsLoading, error, setError } = useContext(appContext);
  const [availablecars, setAvailableCars] = useState([]);
  
  useEffect(() => {
    const getCars = async () => {
      setIsLoading(true);
      try {
        setError(null);
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-white text-2xl sm:text-3xl font-bold mb-8">
        All Available Cars
      </h1>
      
      {isLoading ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <RiseLoader color="#ffffff" size={10} />
        </div>
      ) : (
        <div className="min-h-screen">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center text-red-100 mb-8">
              <p className="text-xl">Something went wrong</p>
              <p className="text-sm mt-2 text-red-200/80">Please try again later</p>
            </div>
          )}
          
          {availablecars.length === 0 && !error ? (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-8 text-center text-blue-100">
              <h3 className="text-xl font-medium mb-2">No cars available</h3>
              <p className="text-blue-200/80">Check back soon for new listings!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {availablecars.map((car) => (
                <div className="w-full" key={car.id}>
                  <Caritem
                    title={car.title}
                    id={car.id}
                    status={car.status}
                    price={car.price}
                    mileage={car.mileage}
                    location={car.location}
                    fuel_type={car.fuel_type}
                    image={car.image}
                    admin={false}
                    handleSetCarToAvailable={() => {}}
                    handleSetCarToRefused={() => {}}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BuyPage;