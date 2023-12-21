import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthService";

const LoggedInRoute = () => {
  const user = useContext(AuthContext);
  // ログインしていればcompornentを描写
  // ログインしていなければ"/login"にリダイレクト
  return user ? <Outlet /> : <Navigate replace to="/login" />;
};

export default LoggedInRoute;
