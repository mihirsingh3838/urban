import React, { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import TeacherProfile from "../Pages/ContentSection/TeacherProfile";

function RoutesPage() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher/:id" element={<TeacherProfile />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default RoutesPage;
