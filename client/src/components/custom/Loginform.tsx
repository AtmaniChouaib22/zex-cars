import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import { login } from "@/lib/fetchUtils";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, error, setError, setUser, setIsLogged } =
    useContext(appContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setError(null);
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(loginData);
      const { first_name, last_name, email, admin, avatar, id, phone } =
        response;
      setUser({ first_name, last_name, email, admin, avatar, id, phone });
      setIsLogged(true);
      setIsLoading(false);
      setError(null);
      navigate("/");
    } catch (err: any) {
      setIsLoading(false);
      setError(err.response.data);
    }
  };
  return (
    <form className="flex flex-col space-y-4 py-4 w-full  items-center justify-center text-white bg-gradient-to-b from-black to-zinc-700">
      <h1 className="sm:text-3xl text-lg font-bold">Login </h1>
      {error && (
        <div className=" text-centee bg-red-500 py-3 px-2 rounded-sm w-full text-white">
          {error}
        </div>
      )}
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="email">Email</Label>
        <Input
          className="text-black"
          id="email"
          value={loginData.email}
          onChange={handleInputChange}
          placeholder="ex: ryangosling@gmail.com"
        />
      </div>
      <div className="flex flex-col px-2 sm:w-2/4 w-full">
        <Label htmlFor="password">Password</Label>
        <Input
          className="text-black"
          id="password"
          type="password"
          placeholder="ex: password1234"
          value={loginData.password}
          onChange={handleInputChange}
        />
      </div>
      {isLoading === true ? (
        <RiseLoader color="#ffffff" size={10} />
      ) : (
        <Button
          type="submit"
          onClick={handleLoginSubmit}
          className="bg-zinc-500 text-white py-2 px-4 rounded-md hover:bg-zinc-700 transition duration-300 mb-5"
        >
          Login
        </Button>
      )}
    </form>
  );
};

export default LoginForm;

//export default Loginform;
