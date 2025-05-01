import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../UI/Home";
import Aichat from "./Aichat";
import NewsFeed from "./NewsFeed";
import Hospitalmap from "./Hospitalmap";
import MyHealthRecords from "./MyHelathRecord";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aichat" element={<Aichat />} />
      <Route path="/newsfeed" element={<NewsFeed />} />
      <Route path="/map" element={<Hospitalmap />} />
      <Route path="/records" element={<MyHealthRecords />} />\
    </Routes>
  );
};

export default AllRoutes;
