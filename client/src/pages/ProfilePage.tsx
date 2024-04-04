import { useState, useContext, useEffect } from "react";
import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import Cardeal from "@/components/custom/Cardeal";
import { fetchUserDeals, fetchUserAvatar } from "@/lib/fetchUtils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const { isLoading, setIsLoading, error, setError, user, setUser, isLogged } =
    useContext(appContext);
  const [deals, setDeals] = useState([]);
  const [file, setFile] = useState(null);
  const [sellingDeals, setSellingDeals] = useState([]);
  const [buyingDeals, setBuyingDeals] = useState([]);

  // handle file change for avatar
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAvatarSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetchUserAvatar(file);
      setUser({ ...user, avatar: response });
    } catch (error) {
      setError(error);
    }
  };

  // fetch user deals
  useEffect(() => {
    const getUserDeals = async () => {
      setIsLoading(true);
      try {
        const deals = await fetchUserDeals();
        setDeals(deals);
        setSellingDeals(deals.selling_deals);
        setBuyingDeals(deals.buying_deals);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    getUserDeals();
  }, []);

  return (
    <>
      {!isLogged ? (
        <div className="flex flex-col items-center pt-20 gap-5 text-3xl">
          please login to view the page
        </div>
      ) : (
        <div className="flex flex-col gap-2 items-center min-h-screen px-2 py-4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-xl w-full">
            <img
              className="sm:w-32 sm:h-32 w-16 h-16 rounded-full mx-auto"
              src={`../uploads/avatars/${user.avatar}`}
            />
            <div className="flex justify-center flex-wrap sm:flex-nowrap gap-2 pt-2">
              <Input
                type="file"
                formEncType="multipart/form-data"
                onChange={handleFileChange}
                className="cursor-pointer"
              ></Input>
              <Button
                onClick={handleAvatarSubmit}
                className="bg-zinc-800 text-white hover:bg-zinc-900"
              >
                set avatar
              </Button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded px-1 sm:px-8 pt-6 pb-8 max-w-xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 font-bold p-2">
              First Name:
              <span className="font-normal">{user.first_name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 font-bold p-2">
              Last Name: <span className="font-normal">{user.last_name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 font-bold p-2">
              Email:
              <span className="overflow-auto break-words font-normal">
                {user.email}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 font-bold p-2">
              Phone:
              <span className="overflow-auto break-words font-normal">
                {user.phone}
              </span>
            </div>
          </div>

          {/* user car deals */}
          <div className="grid sm:grid-cols-2 grid-cols-1 bg-white shadow-md rounded px-1 sm:px-8 pt-6 pb-8 max-w-3xl w-full">
            {/* user for sale */}
            <div className="flex flex-col items-center sm:border-r-2 sm:border-zinc-950">
              <h4 className="text-2xl font-bold">Sale Deals</h4>
              {/* iterations */}
              {error && <div>{error}</div>}
              {sellingDeals.length === 0 && <div>No deals found</div>}
              {isLoading ? (
                <RiseLoader color="#000" />
              ) : (
                sellingDeals.map((deal) => (
                  <Cardeal
                    key={deal.id}
                    title={deal.title}
                    image={deal.image}
                    status={deal.status}
                    price={deal.price}
                  />
                ))
              )}
            </div>
            {/* user for buy */}
            <div className="flex flex-col items-center">
              <h4 className="text-2xl font-bold">Buy Deals</h4>
              {error && <div>{error}</div>}
              {sellingDeals.length === 0 && <div>No deals found</div>}
              {isLoading ? (
                <RiseLoader color="#000" />
              ) : (
                buyingDeals.map((deal) => (
                  <Cardeal
                    key={deal.id}
                    title={deal.car.title}
                    image={deal.car.image}
                    confirmed={deal.confirmed}
                    price={deal.car.price}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
