import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/style/GlobalStyle";
import SignUp from "./pages/LoginPages/SignUp/SignUp";
import Login from "./pages/LoginPages/Login/Login";
import Lost from "./pages/LoginPages/Lost/Lost";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import NewEvent from "./pages/EventPages/NewEvent/NewEvent";
import EventDetails from "./pages/EventPages/EventDetails/EventDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/login/signup" element={<SignUp />} />
          <Route path="/login/lost" element={<Lost />} />
          <Route exact path="/event/:id" element={<EventDetails />} />
          <Route path="/events/post" element={<NewEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
