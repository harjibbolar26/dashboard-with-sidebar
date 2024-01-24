"use client";

import React, { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import SidebarContent from "./sidebar-content";
import sidemenu from "./data";
import AppsPagesSidemenu from "./apps-pages";
import SidebarIcons from "./sidebar-icons";
import ComponentsMenu from "./components";
import FormsTablesMenu from "./forms-tables";
import ChartsMapsMenu from "./charts-maps";
import MiscMenu from "./misc";

const Sidebar = ({ toggleRadioButton }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCloseSidebar, setShowCloseSidebar] = useState(false);
  const [showSidebarMenuOnHover, setShowSidebarMenuOnHover] = useState(false);
  const [showSidebarIcons, setShowSidebarIcons] = useState(true);
  const [radioChecked, setRadioChecked] = useState(false);
  const [contentHover, setContentHover] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowCloseSidebar(!showCloseSidebar);
  };

  const toggleCloseSidebar = () => {
    setShowCloseSidebar(false);
    setShowSidebar(false);
  };

  const handleShowSidebarFullContent = () => {
    setShowSidebarIcons(!showSidebarIcons);
    setShowSidebarMenuOnHover(!showSidebarMenuOnHover);
  };

  const handleHideSidebarFullContent = () => {
    setShowSidebarIcons(true);
    setShowSidebarMenuOnHover(false);
  };

  let handleVisibility = () => {
    setRadioChecked(!radioChecked);
    toggleRadioButton();
    // setShowSidebarIcons(false)
  };
  const handleSidebarHover = () => {
    setContentHover(!contentHover);
  };

  const handleSidebarLeave = () => {
    setContentHover(false);
  };

  // console.log(menu1);
  return (
    <>
      {showSidebarIcons && (
        <div onMouseOver={handleShowSidebarFullContent} className="sidebar">
          <SidebarIcons
            menu1={sidemenu}
            menu2={AppsPagesSidemenu}
            showSidebarIcons={showSidebarIcons}
          />
        </div>
      )}

      {showSidebarMenuOnHover && (
        <div
          onMouseLeave={handleHideSidebarFullContent}
          className={
            showSidebarIcons
              ? "sidebar-hover translate-x--24 duration-300"
              : "sidebar-hover"
          }
        >
          <SidebarContent
            menu1={sidemenu}
            menu2={AppsPagesSidemenu}
            menu3={ComponentsMenu}
            menu4={FormsTablesMenu}
            menu5={ChartsMapsMenu}
            menu6={MiscMenu}
            handleChecked={radioChecked}
            handleVisibility={handleVisibility}
            showMenuItems={showSidebarMenuOnHover}
          />
          {/* {showSidebar && (
            <SidebarContent
              menu1={sidemenu}
              menu2={AppsPagesSidemenu}
              menu3={ComponentsMenu}
              menu4={FormsTablesMenu}
              menu5={ChartsMapsMenu}
              menu6={MiscMenu}
              showMenuItems={showSidebar}
            />
          )} */}
        </div>
      )}

      {radioChecked && (
        <div
          onMouseOver={handleSidebarHover}
          onMouseLeave={handleSidebarLeave}
          className={`sidebar-checked ${contentHover ? "hovered" : "hide"}`}
        >
          <SidebarContent
            menu1={sidemenu}
            menu2={AppsPagesSidemenu}
            menu3={ComponentsMenu}
            menu4={FormsTablesMenu}
            menu5={ChartsMapsMenu}
            menu6={MiscMenu}
            handleChecked={radioChecked}
            handleVisibility={handleVisibility}
            showMenuItems={radioChecked}
          />
          {/* {showSidebar && (
            <SidebarContent
              menu1={sidemenu}
              menu2={AppsPagesSidemenu}
              menu3={ComponentsMenu}
              menu4={FormsTablesMenu}
              menu5={ChartsMapsMenu}
              menu6={MiscMenu}
              showMenuItems={showSidebar}
            />
          )} */}
        </div>
      )}
      <div className="max-md:block absolute top-1 left-2 hidden max-md:my-2 cursor-pointer">
        <GrMenu size={25} onClick={toggleSidebar} />
      </div>
      {showSidebar && (
        <>
          <div
            onClick={toggleCloseSidebar}
            className="bg-[#00000066] w-full h-full absolute top-0 left-0"
          ></div>
          <div className="sidebar-checked relative">
            <SidebarContent
              menu1={sidemenu}
              menu2={AppsPagesSidemenu}
              menu3={ComponentsMenu}
              menu4={FormsTablesMenu}
              menu5={ChartsMapsMenu}
              menu6={MiscMenu}
              showMenuItems={showSidebar}
            />
          </div>
        </>
      )}
      {showCloseSidebar && (
        <div className="max-md:block absolute top-1 left-[200px] hidden max-md:my-2 z-50">
          <MdClose size={25} onClick={toggleCloseSidebar} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
