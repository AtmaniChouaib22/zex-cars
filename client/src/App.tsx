import { useState, createContext } from "react";
import Navbar from "../src/components/custom/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sellpage from "./pages/Sellpage";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/LoginPage";
import RegistrPage from "./pages/RegistrPage";
import ProfilePage from "./pages/ProfilePage";

export const appContext = createContext({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => {},
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {},
  error: null,
  setError: (error: any) => {},
  user: {},
  setUser: (user: object) => {},
  success: null,
  setSuccess: (success: any) => {},
});

function App() {
  const [isLoagged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    admin: false,
    email: "",
    id: "",
    avatar: "",
    phoone: "",
  });

  return (
    <appContext.Provider
      value={{
        isLogged: isLoagged,
        setIsLogged: setIsLogged,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        error: error,
        setError: setError,
        user: user,
        setUser: setUser,
        success: success,
        setSuccess: setSuccess,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/sellcar" element={<Sellpage />} />
          <Route path="/buycar" element={<BuyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </appContext.Provider>
  );
}

export default App;
