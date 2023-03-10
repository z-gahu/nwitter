// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(true);
  // console.log({ isLoggedIn });
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        {/* <Route element={<Navigation />}></Route> */}
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </>
        ) : (
          <Route path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
