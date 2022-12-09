import React from "react";
import "../../common.scss";
import Footer from "../../components/Footer";
import { Navigate, Route, Routes } from "react-router";
import loadable from "@loadable/component";

const SignUp = loadable(() => import("@pages/SignUp"));

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signUp" />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
