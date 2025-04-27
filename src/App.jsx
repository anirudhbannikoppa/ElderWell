import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";


import Header from "./components/Header";

import AllRoutes from "./components/AllRoutes";
import Footer from "./UI/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
