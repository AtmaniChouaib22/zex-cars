import { useState, useEffect, useContext } from "react";
import {
  fetchUnconfirmedDeals,
  confirmDeal,
  rejectDeal,
} from "../../lib/fetchUtils";
import { appContext } from "@/App";
import Cardeal from "@/components/custom/Cardeal";
import RiseLoader from "react-spinners/RiseLoader";

const UnconfirmedDealsPage = () => {
  const { user, isLoading, setIsLoading, err, setError } =
    useContext(appContext);
  const [pendingDeals, setPendingDeals] = useState([]);

  const fetchDeals = async () => {
    setIsLoading(true);
    try {
      const deals = await fetchUnconfirmedDeals();
      setPendingDeals(deals);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleConfirmDeal = async (id) => {
    try {
      await confirmDeal(id);
      fetchDeals();
    } catch (error) {
      setError(error);
    }
  };

  const handleRejectDeal = async (id) => {
    try {
      await rejectDeal(id);
      fetchDeals();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <>
      <div className="text-3xl text-center font-bold py-5 text-white">
        Unconfirmed Deals
      </div>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <RiseLoader color="#ffffff" size={10} />
        </div>
      ) : (
        <>
          <div className="bg-gradient-to-b from-black to-zinc-700 ">
            <div className="flex flex-wrap">
              {pendingDeals.length > 0 ? (
                <>
                  {pendingDeals.map((deal) => (
                    <Cardeal
                      key={deal.id}
                      title={deal.car.title}
                      image={deal.car.image}
                      status={deal.car.status}
                      price={deal.car.price}
                      admin={user.admin}
                      confirmed={deal.confirmed}
                      id={deal.id}
                      handleConfirmDeal={handleConfirmDeal}
                      handleRejectDeal={handleRejectDeal}
                    />
                  ))}
                </>
              ) : (
                <div className="text-center mx-auto text-white">
                  No deals found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UnconfirmedDealsPage;
