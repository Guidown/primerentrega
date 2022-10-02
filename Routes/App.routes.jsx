import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact";
import Store from "../src/Pages/Store";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Store />} path="/store" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};

export default AppRoutes;
