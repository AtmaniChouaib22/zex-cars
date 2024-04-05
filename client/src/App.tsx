import { useState, createContext } from "react";
import Navbar from "../src/components/custom/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sellpage from "./pages/Sellpage";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/LoginPage";
import RegistrPage from "./pages/RegistrPage";
import ProfilePage from "./pages/ProfilePage";
import CardetailsPage from "./pages/CardetailsPage";
import Footer from "./components/custom/Footer";
import PendingCarsPage from "./pages/admin/PendingCarsPage";
import UnconfirmedDealsPage from "./pages/admin/UnconfirmedDealsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const appContext = createContext({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => {},
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {},
  err: null,
  setError: (err: any) => {},
  user: {},
  setUser: (user: object) => {},
});

function App() {
  const [isLoagged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState(null);
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
        err: err,
        setError: setError,
        user: user,
        setUser: setUser,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sellcar" element={<Sellpage />} />
          <Route path="/buycar" element={<BuyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="buycar/:id" element={<CardetailsPage />} />
          <Route path="admin/pendingcars" element={<PendingCarsPage />} />
          <Route
            path="admin/unconfirmeddeals"
            element={<UnconfirmedDealsPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </appContext.Provider>
  );
}

export default App;
