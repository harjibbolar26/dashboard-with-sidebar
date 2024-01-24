import React from "react";
import MenuIcons from "./menuicons";
import Image from "next/image";
import MenuList from "./menulist";

const SidebarIcons = ({
  menu1 = [],
  menu2 = [],
  menu3 = [],
  menu4 = [],
  menu5 = [],
  menu6 = [],
  showSidebarIcons,
}) => {
  return (
    <div className="sm:block hidden">
      <Image
        src="/home-icon.png"
        alt="logo"
        height={35}
        width={35}
        className="ml-6 max-md:w-[30px]"
      />
      <MenuList list={menu1} showSidebarIcons={showSidebarIcons} />
      <MenuList list={menu2} showSidebarIcons={showSidebarIcons} />
    </div>
  );
};

export default SidebarIcons;
