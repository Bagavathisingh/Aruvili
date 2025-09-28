import { Outlet } from "react-router-dom";
import Vector from "../vectorline/vector";
import Oval from "./OvalAnimation";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

export default function HomeLayout() {
    const location = useLocation();
  return (
    <div className="h-full flex justify-center relative w-full overflow-hidden">
      <Oval />

      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 2, type: "spring", ease: easeInOut }}
        className={`absolute shadow-2xl z-10 back rotate-6 left-40 hidden md:flex top-5 h-[60px] w-[180px] justify-center items-center rounded-2xl ${
          location.pathname == "/services" ? "flex" : "hidden"
        }`}
      >
        <h1 className="inter -rotate-6">Aruvili</h1>
      </motion.div>

      <div className="h-full w-[960px]">
        <Vector />
        <Outlet/>
      </div>
    </div>
  );
}
