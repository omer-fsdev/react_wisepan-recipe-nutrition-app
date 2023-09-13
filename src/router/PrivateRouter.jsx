import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  return localStorage.getItem("user") === "user1" &&
    localStorage.getItem("passw") === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
