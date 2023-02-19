import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { UserDetails } from "../pages/userDetails/UserDetails";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userDetails" element={<UserDetails />} />
    </Routes>
  );
};


