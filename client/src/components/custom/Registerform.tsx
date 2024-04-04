import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import { register } from "@/lib/fetchUtils";

const Registerform = () => {
  const { isLoading, setIsLoading, err, setError } = useContext(appContext);
  const [data, setData] = useState(null);
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const handleRegInputChange = (e) => {
    setError(null);
    setData(null);
    setRegisterData({
      ...registerData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegisterSubmit = async (e) => {
    setError(null);
    setData(null);
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await register(registerData);
      setIsLoading(false);
      setData(response.message);
      setRegisterData({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone: "",
      });
    } catch (error: any) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <form className="flex flex-col space-y-4 py-4 w-full  items-center justify-center">
      <h1 className="sm:text-3xl text-lg font-bold">Register </h1>
      {err && (
        <div className=" text-centee bg-red-500 py-3 px-2 rounded-sm w-full text-white text-center">
          {err}
        </div>
      )}
      {data && (
        <div className=" text-centee bg-green-500 py-3 px-2 rounded-sm w-full text-white text-center">
          {data}
        </div>
      )}
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="first_name">First Name</Label>
        <Input
          id="first_name"
          type="text"
          placeholder="ex: Ryan"
          value={registerData.first_name}
          onChange={handleRegInputChange}
        />
      </div>
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          id="last_name"
          type="text"
          placeholder="ex: Gosling"
          value={registerData.last_name}
          onChange={handleRegInputChange}
        />
      </div>
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="text"
          placeholder="ex: 0700000000"
          value={registerData.phone}
          onChange={handleRegInputChange}
        />
      </div>
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={registerData.email}
          onChange={handleRegInputChange}
          placeholder="ex: ryangosling@gmail.com"
        />
      </div>
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="ex: password1234"
          value={registerData.password}
          onChange={handleRegInputChange}
        />
      </div>
      {isLoading === true ? (
        <RiseLoader color="#09090b" size={10} />
      ) : (
        <Button
          type="submit"
          onClick={handleRegisterSubmit}
          variant={"default"}
        >
          Register
        </Button>
      )}
    </form>
  );
};

export default Registerform;
