"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  MdSearch,
  MdApps,
  MdDoorbell,
  MdLightMode,
  MdClose,
} from "react-icons/md";

const Navbar = ({ radioChecked }) => {
  const [showIcons, setShowIcons] = useState(true);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFocus = () => {
    setShowIcons(!showIcons);
    setShowCloseIcon(!showCloseIcon);
  };

  const handleBlur = () => {
    setShowIcons(true);
    setShowCloseIcon(false);
  };

  const navbarWidth = radioChecked ? "80" : "90";
  console.log("Navbar - radioChecked:", navbarWidth);

  return (
    <div
      style={{ width: `${navbarWidth}%` }}
      className={`navbar-class w-${navbarWidth} ${scroll ? "scrolled" : ""}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center max-md:pt-1 max-lg:ml-16 lg:ml-[0]">
          <span className="mr-[-10px] max-md:absolute max-md:left-[50px]">
            <MdSearch size={25} />
          </span>
          <input
            type="text"
            className={
              showIcons
                ? "input-class cursor-pointer"
                : "input-class focus-class"
            }
            placeholder={showIcons ? "Search (Ctrl + /)" : "Search..."}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showCloseIcon && (
            <MdClose
              className="cursor-pointer"
              size={20}
              onClick={handleBlur}
            />
          )}
        </div>
        {showIcons && (
          <div className="c-flex translate-y--20 duration-300 ease-in-out">
            <span>
              <MdApps size={30} className="mr-4 cursor-pointer " />
            </span>
            <span>
              <MdDoorbell size={30} className="mr-4 cursor-pointer" />
            </span>
            <span>
              <MdLightMode size={30} className="mr-4 cursor-pointer" />
            </span>
            <span>
              <MdDoorbell size={30} className="mr-4 cursor-pointer" />
            </span>
            <Image
              src="/nav-pro.png"
              alt="profile"
              width={40}
              height={40}
              className="mr-4 rounded-full cursor-pointer max-md:w-[30px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
