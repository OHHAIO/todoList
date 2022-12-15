import React from "react";
import "../../common.scss";
import Footer from "../../components/Footer";
import { Navigate, Route, Routes } from "react-router";
import loadable from "@loadable/component";

const SignUp = loadable(() => import("@pages/SignUp"));
const Login = loadable(() => import("@pages/Login"));

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
