import React from "react";
import { Routes, Route } from "react-router-dom";
// import Testimonials from "../UI/Testimonials";
// import Pricing from "../UI/Pricing";
// import Track from "../UI/Track";
import Home from "../UI/Home";
import Aichat from "./Aichat";
import NewsFeed from "./NewsFeed";  
// import { useAuth0 } from "@auth0/auth0-react";
// import Login from "../UI/LogIn/Login";

const AllRoutes = () => {
  // const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aichat" element={<Aichat />} />
      <Route path="/newsfeed" element={<NewsFeed />} />
      {/* <Route path="/programs" element={<Testimonials />} />
      <Route path="/membership" element={<Pricing />} /> */}
      {/* <Route path="/track" element={isAuthenticated ? <Track /> : <Login />} /> */}
    </Routes>
  );
};

export default AllRoutes;
