import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { appContext } from "@/App";
import { useState, useContext } from "react";
import { sellCar } from "@/lib/fetchUtils";
import RiseLoader from "react-spinners/RiseLoader";

const Sellpage = () => {
  const { setIsLoading, isLoading, setError, error, user } =
    useContext(appContext);
  const [file, setFile] = useState<File | null>(null);
  const [carData, setCarData] = useState({
    title: "",
    location: "",
    model: "",
    mileage: 0,
    make: "",
    year: 0,
    n_of_seats: 0,
    n_of_doors: 0,
    colour: "",
    price: 0,
    engine_capacity: 0,
    fuel_tank_capacity: 0,
    fuel_type: "",
    gears: 0,
    transmission: "",
  });

  const handleChange = (e: any) => {
    setCarData({ ...carData, [e.target.id]: e.target.value });
  };
  const handleSellSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await sellCar(carData, file!);
      if (response.status === 200) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-3xl font-bold">Sell your car</div>
      <p className="sm:px-40 px-10 py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        consequuntur tempore quos eius recusandae natus exercitationem error
        itaque cumque maiores doloremque possimus cupiditate ducimus suscipit
        necessitatibus, voluptate qui. In, repellendus!
      </p>
      <form
        className="sm:px-14 flex flex-col gap-5"
        encType="multipart/form-data"
      >
        <div className="text-2xl font-bold text-center gap-3">Car Details</div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-3 px-8 sm:px-20">
          <div className="col-span-2">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="location">location</Label>
            <Input type="text" id="location" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="model">Model</Label>
            <Input type="text" id="model" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="image">Car Picture</Label>
            <Input
              type="file"
              id="image"
              formEncType="multipart/form-data"
              className="cursor-pointer"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
          <div>
            <Label htmlFor="mileage">Mileage</Label>
            <Input
              type="number"
              id="mileage"
              className="w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="make">Make</Label>
            <Input
              type="text"
              id="make"
              className="w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="year">Registration Year</Label>
            <Input
              type="number"
              id="year"
              className="w-3/4 "
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="n_of_seats">No of seats</Label>
            <Input
              type="number"
              id="n_of_seats"
              className="w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="n_of_doors">no of doors</Label>
            <Input
              type="number"
              id="n_of_doors"
              className="w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="colour">Colour</Label>
            <Input
              type="text"
              id="colour"
              className="w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              className="w-3/4"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-2xl font-bold text-center">
          Car Performance Details
        </div>
        <div className="flex justify-center flex-wrap items-center px-8 sm:px-20 gap-3 ">
          <div className="">
            <Label htmlFor="engine_capacity">Engine Capacity</Label>
            <Input
              type="number"
              id="engine_capacity"
              className="w-full sm:w-3/4 "
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="fuel_tank_capacity">Fuel tank capacity</Label>
            <Input
              type="number"
              id="fuel_tank_capacity"
              className="w-full sm:w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="fuel_type">Fuel Type</Label>
            <select
              id="fuel_type"
              className="w-full sm:w-3/4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setCarData({ ...carData, fuel_type: e.target.value })
              }
            >
              <option value="not provided">Select...</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
              <option value="naturel gas">Electric</option>
            </select>
          </div>
          <div>
            <Label htmlFor="gears">Gears</Label>
            <Input
              type="number"
              id="gears"
              className="w-full sm:w-3/4"
              onChange={handleChange}
            />
          </div>
          <div>
            <div>
              <Label htmlFor="transmission">Transmission</Label>
              <select
                id="transmission"
                className="w-full sm:w-3/4"
                onChange={(e) =>
                  setCarData({ ...carData, transmission: e.target.value })
                }
              >
                <option value="">Select...</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
                <option value="Semi_Automatic">Semi_Automatic</option>
                <option value="CVT">CVT</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <RiseLoader color="#09090b" size={10} />
          ) : (
            <Button className="px-10" onClick={handleSellSubmit}>
              Sell
            </Button>
          )}
        </div>
        {error && (
          <div className="text-3xl text-center ">Something went wrong</div>
        )}
      </form>
    </div>
  );
};

export default Sellpage;
