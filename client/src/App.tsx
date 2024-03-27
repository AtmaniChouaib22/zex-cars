import { useState, createContext } from "react";
import Navbar from "../src/components/custom/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const appContext = createContext({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => {},
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {},
});

function App() {
  const [isLoagged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <appContext.Provider
      value={{
        isLogged: isLoagged,
        setIsLogged: setIsLogged,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </BrowserRouter>
    </appContext.Provider>
  );
}

export default App;
