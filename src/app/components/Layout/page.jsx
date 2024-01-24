"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/page";
import Navbar from "../Navbar/page";
import Homepage from "../Home/page";

const Layout = () => {
  const [radioChecked, setRadioChecked] = useState(false);

  useEffect(() => {
    console.log('Initial radioChecked state:', radioChecked);
  }, []);

  const toggleRadiobutton = () => {
    setRadioChecked(prevState => !prevState);
  };

  return (
    <div className="">
      <Sidebar toggleRadioButton={toggleRadiobutton} />
      <Navbar radioChecked={radioChecked} />
      <Homepage radioChecked={radioChecked} />
    </div>
  );
};

export default Layout;
