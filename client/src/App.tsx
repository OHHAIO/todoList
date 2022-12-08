import React from "react";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";

const App = () => {
  return (
    <main className="app">
      <BrowserRouter></BrowserRouter>
      <Footer />
    </main>
  );
};

export default App;
