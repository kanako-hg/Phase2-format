import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Room from "./Room";

import { AuthProvider } from "../AuthService";
import LoggedInRoute from "../LoggedInRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LoggedInRoute />}></Route>
          <Route path="/" element={<Room />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/* ログインしているユーザーのみが閲覧できるページ */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
