import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import Table from "../components/charts/Table";
import Login from "../components/Pages/Login";
import Authen from "../components/Pages/Authen";
import MainBoard from "../components/Pages/MainBoard";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* set up Layout cho các route Default  */}
          <Route path="/" element={<App />}>
            {/* Những cái children trong Layout tùy theo path mà sẽ hiện lên ở phần main  */}
            <Route index element={<Main />} />
            <Route path="/management" element={<MainBoard />} />
          </Route>
          {/* Những Layout riêng */}
          <Route path="/login" element={<Login />} />
          <Route path="/Authen" element={<Authen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
