import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { useState } from "react";

import Home from "./pages/home/home";
import ProductCatigory from "./pages/productCatigory/ProductCatigory";

function App() {
  const [currentTHeme, setcurrentTHeme] = useState("light");

  const changeTheme = () => {
    setcurrentTHeme((prev) => (prev === "light" ? "dark" : "light"));
  };

  <Routes>
    <Route path="/" /> {/* 👈 Renders at /app/ */}
  </Routes>;

  return (
    <BrowserRouter basename="/">
      <div className={currentTHeme === "dark" ? "dark-theme" : ""}>
        <Routes>
          <Route
            path="/"
            element={
              <Home changeTheme={changeTheme} currentTHeme={currentTHeme} />
            }
          />
          <Route
            path="/catigory"
            element={
              <ProductCatigory
                changeTheme={changeTheme}
                currentTHeme={currentTHeme}
              />
            }
          />
        </Routes>
        ;
      </div>
    </BrowserRouter>
  );
}

export default App;
