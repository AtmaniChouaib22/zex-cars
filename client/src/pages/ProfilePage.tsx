import { useState, useContext, useEffect } from "react";
import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import Cardeal from "@/components/custom/Cardeal";
import { fetchUserDeals, fetchUserAvatar } from "@/lib/fetchUtils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUser, FaEnvelope, FaPhone, FaSave } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";

const ProfilePage = () => {
  const { isLoading, setIsLoading, error, setError, user, setUser, isLogged } =
    useContext(appContext);
  const [deals, setDeals] = useState([]);
  const [file, setFile] = useState(null);
  const [sellingDeals, setSellingDeals] = useState([]);
  const [buyingDeals, setBuyingDeals] = useState([]);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarSuccess, setAvatarSuccess] = useState(false);

  // handle file change for avatar
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setAvatarSuccess(false);
  };

  const handleAvatarSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    setAvatarUploading(true);
    try {
      const response = await fetchUserAvatar(file);
      setUser({ ...user, avatar: response });
      setAvatarSuccess(true);
      setTimeout(() => setAvatarSuccess(false), 3000);
    } catch (error) {
      setError("Failed to update avatar");
    } finally {
      setAvatarUploading(false);
    }
  };

  // fetch user deals
  useEffect(() => {
    const getUserDeals = async () => {
      setIsLoading(true);
      try {
        const deals = await fetchUserDeals();
        setDeals(deals);
        setSellingDeals(deals.selling_deals || []);
        setBuyingDeals(deals.buying_deals || []);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    if (isLogged) {
      getUserDeals();
    }
  }, [isLogged]);

  if (!isLogged) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-white">
        <div className="text-3xl font-semibold">Login Required</div>
        <p className="text-gray-300">Please login to view your profile</p>
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        My Profile
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Avatar & User Info */}
        <div className="lg:col-span-1">
          {/* Avatar Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl overflow-hidden mb-6">
            <div className="bg-neutral-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Profile Picture
              </h2>
            </div>

            <div className="p-6 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <img
                  className="w-full h-full rounded-full object-cover border-4 border-gray-100"
                  src={`../uploads/avatars/${user.avatar}`}
                  alt={`${user.first_name}'s avatar`}
                />
              </div>

              {avatarSuccess && (
                <div className="w-full bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center text-green-700 mb-4">
                  Avatar updated successfully!
                </div>
              )}

              <div className="w-full">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="file"
                    formEncType="multipart/form-data"
                    onChange={handleFileChange}
                    className="cursor-pointer bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-600 focus:border-blue-600"
                  />
                  <Button
                    onClick={handleAvatarSubmit}
                    disabled={!file || avatarUploading}
                    className="bg-neutral-600 hover:bg-neutral-900 hover:cursor-pointer text-white flex items-center justify-center gap-2 transition-all"
                  >
                    {avatarUploading ? (
                      <RiseLoader color="#ffffff" size={5} />
                    ) : (
                      <>
                        <FaSave className="text-sm" /> Set Avatar
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* User Info Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <div className="bg-neutral-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Personal Information
              </h2>
            </div>

            <div className="p-6 divide-y divide-gray-200">
              <div className="py-3 flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <FaUser />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-medium">Name</div>
                  <div className="text-gray-900 mt-1">
                    {user.first_name} {user.last_name}
                  </div>
                </div>
              </div>

              <div className="py-3 flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-medium">Email</div>
                  <div className="text-gray-900 mt-1 break-all">
                    {user.email}
                  </div>
                </div>
              </div>

              <div className="py-3 flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-medium">Phone</div>
                  <div className="text-gray-900 mt-1">{user.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Deals */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
            <div className="bg-neutral-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">My Deals</h2>
            </div>

            {error && (
              <div className="mx-6 my-4 bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-700">
                  {typeof error === "string"
                    ? error
                    : "An error occurred while fetching deals"}
                </p>
              </div>
            )}

            {isLoading ? (
              <div className="flex justify-center items-center py-16">
                <RiseLoader color="#2563eb" size={10} />
              </div>
            ) : (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Selling Deals */}
                  <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4 border border-gray-100 ">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
                      <MdSell className="text-xl text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-900">
                        Selling Deals
                      </h3>
                    </div>

                    {sellingDeals.length === 0 ? (
                      <div className="text-gray-500 text-center py-6">
                        You don't have any active selling deals
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {sellingDeals.map((deal) => (
                          <Cardeal
                            key={deal.id}
                            title={deal.title}
                            image={deal.image}
                            status={deal.status}
                            price={deal.price}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Buying Deals */}
                  <div className="bg-gray-50 rounded-lg p-4 border-gray-50 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
                      <IoBagCheck className="text-xl text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-900">
                        Buying Deals
                      </h3>
                    </div>

                    {buyingDeals.length === 0 ? (
                      <div className="text-gray-500 text-center py-6">
                        You don't have any active buying deals
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {buyingDeals.map((deal) => (
                          <Cardeal
                            key={deal.id}
                            title={deal.car.title}
                            image={deal.car.image}
                            confirmed={deal.confirmed}
                            price={deal.car.price}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
