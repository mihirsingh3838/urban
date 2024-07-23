import React, { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import TeacherProfile from "../Pages/ContentSection/TeacherProfile";
import RegistrationPage from "../Pages/Registration/RegistrationPage";
import LoginPage from "../Pages/Login/LoginPage";

function RoutesPage() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher/:id" element={<TeacherProfile />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default RoutesPage;
