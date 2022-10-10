import React from "react";
import WebFont from "webfontloader";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./routes/ProtectedRoute";
import { Header, Footer, NotFound } from "./components";
import { Home, Login, Register, Account } from "./pages";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700"],
      },
    });
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
