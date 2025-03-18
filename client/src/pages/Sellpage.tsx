import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { appContext } from "@/App";
import { useState, useContext } from "react";
import { sellCar } from "@/lib/fetchUtils";
import RiseLoader from "react-spinners/RiseLoader";

const Sellpage = () => {
  const { setIsLoading, isLoading, setError, error, user, isLogged } =
    useContext(appContext);
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
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
    description: "",
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
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);

        // Reset form
        setCarData({
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
          description: "",
        });
        setFile(null);
      } else {
        setIsLoading(false);
        setError(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred while submitting your listing");
    }
  };

  if (!isLogged) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-white">
        <div className="text-3xl font-semibold">Login Required</div>
        <p className="text-gray-300">Please login to access the sell page</p>
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Sell Your Car</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            List your car for sale by filling out the information below.
            Providing accurate and detailed information will help your listing
            attract more buyers.
          </p>
        </div>

        {success && (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-300 font-medium">
              Your car has been successfully listed!
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 text-center">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        <form className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Car Details Section */}
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-full inline-flex items-center justify-center mr-3 text-sm text-white">
                1
              </span>
              Car Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title - Full Width */}
              <div className="md:col-span-2">
                <Label
                  htmlFor="title"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  value={carData.title}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. BMW 3 Series 2020 Executive Edition"
                />
              </div>

              {/* Description - Full Width */}
              <div className="md:col-span-2">
                <Label
                  htmlFor="description"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Description
                </Label>
                <Input
                  type="text"
                  id="description"
                  value={carData.description}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Describe your car in detail"
                />
              </div>

              {/* Car Picture - Full Width */}
              <div className="md:col-span-2">
                <Label
                  htmlFor="image"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Car Picture
                </Label>
                <Input
                  type="file"
                  id="image"
                  formEncType="multipart/form-data"
                  className="cursor-pointer bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
              </div>

              {/* Two Column Fields */}
              <div>
                <Label
                  htmlFor="make"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Make
                </Label>
                <Input
                  type="text"
                  id="make"
                  value={carData.make}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. BMW"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="model"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Model
                </Label>
                <Input
                  type="text"
                  id="model"
                  value={carData.model}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 3 Series"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="year"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Registration Year
                </Label>
                <Input
                  type="number"
                  id="year"
                  value={carData.year || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 2020"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="mileage"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Mileage (km)
                </Label>
                <Input
                  type="number"
                  id="mileage"
                  value={carData.mileage || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 25000"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="location"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Location
                </Label>
                <Input
                  type="text"
                  id="location"
                  value={carData.location}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. New York"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="price"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Price ($)
                </Label>
                <Input
                  type="number"
                  id="price"
                  value={carData.price || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 25000"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="colour"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Color
                </Label>
                <Input
                  type="text"
                  id="colour"
                  value={carData.colour}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. Black"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="n_of_seats"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Number of Seats
                </Label>
                <Input
                  type="number"
                  id="n_of_seats"
                  value={carData.n_of_seats || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 5"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="n_of_doors"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Number of Doors
                </Label>
                <Input
                  type="number"
                  id="n_of_doors"
                  value={carData.n_of_doors || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 4"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Car Performance Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-full inline-flex items-center justify-center mr-3 text-sm text-white">
                2
              </span>
              Performance Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="engine_capacity"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Engine Capacity (hp)
                </Label>
                <Input
                  type="number"
                  id="engine_capacity"
                  value={carData.engine_capacity || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 150"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="fuel_tank_capacity"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Fuel Tank Capacity (L)
                </Label>
                <Input
                  type="number"
                  id="fuel_tank_capacity"
                  value={carData.fuel_tank_capacity || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 60"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label
                  htmlFor="fuel_type"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Fuel Type
                </Label>
                <select
                  id="fuel_type"
                  value={carData.fuel_type}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  onChange={(e) =>
                    setCarData({ ...carData, fuel_type: e.target.value })
                  }
                >
                  <option value="not provided">Select...</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                  <option value="natural gas">Natural Gas</option>
                </select>
              </div>

              <div>
                <Label
                  htmlFor="transmission"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Transmission
                </Label>
                <select
                  id="transmission"
                  value={carData.transmission}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  onChange={(e) =>
                    setCarData({ ...carData, transmission: e.target.value })
                  }
                >
                  <option value="">Select...</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Semi_Automatic">Semi-Automatic</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>

              <div>
                <Label
                  htmlFor="gears"
                  className="text-gray-700 mb-1 block font-medium"
                >
                  Number of Gears
                </Label>
                <Input
                  type="number"
                  id="gears"
                  value={carData.gears || ""}
                  className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="e.g. 6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-center">
            {isLoading ? (
              <div className="py-2">
                <RiseLoader color="#2563eb" size={10} />
              </div>
            ) : (
              <Button
                className="px-10 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all"
                onClick={handleSellSubmit}
              >
                List My Car For Sale
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sellpage;
