import React from "react";
import MenuList from "./menulist";
import Image from "next/image";

const SidebarContent = ({
  menu1 = [],
  menu2 = [],
  menu3 = [],
  menu4 = [],
  menu5 = [],
  menu6 = [],
  handleChecked,
  handleVisibility,
  showMenuItems,
}) => {
  return (
    <div className="z-50">
      <div className="flex justify-between items-center fixed top-0 w-[19vw] max-sm:w-[15vw] bg-[#f4f5fa] pt-[8px] z-30">
        <div className="flex justify-start items-center">
          <Image
            src="/home-icon.png"
            alt="logo"
            height={35}
            width={35}
            className="ml-6 max-md:w-[30px]"
          />
          <h3 className="uppercase lg:text-lg font-bold md:text-base sm:text-sm ">
            Materio
          </h3>
        </div>
        <input
          type="checkbox"
          name="displaySidebar"
          color="#69656F"
          height={20}
          width={20}
          size={20}
          className="mr-8 max-sm:mr-2 max-md:hidden"
          checked={handleChecked}
          onChange={handleVisibility}
        />
      </div>
      <div className="flex flex-col mt-12 ">
        <div className="">
          <MenuList showMenuItems={showMenuItems} list={menu1} />
        </div>
        <div className="">
          <div className="relative ">
            <h4 className="relative uppercase pl-6 text-xs text-[#B5B3B8] mt-2 z--10">Apps & Pages</h4>
            <div className="absolute top-1/2 right-0  mr-6 w-2/5 h-[1px] bg-[#B5B3B8]"></div>
          </div>
          <MenuList list={menu2} showMenuItems={showMenuItems} />
        </div>
        <div className="">
          <div className="relative ">
            <h4 className="relative uppercase pl-6 text-xs text-[#B5B3B8] mt-2 mr-10 z--10">Components</h4>
            <div className="absolute top-1/2 right-0  mr-6 w-2/5 h-[1px] bg-[#B5B3B8]"></div>
          </div>
          <MenuList list={menu3} showMenuItems={showMenuItems} />
        </div>
        <div className="">
          <div className="relative ">
            <h4 className="relative uppercase pl-6 text-xs text-[#B5B3B8] mt-2 mr-20 z--10">Forms & Tables</h4>
            <div className="absolute top-1/2 right-0  mr-6 w-2/5 h-[1px] bg-[#B5B3B8]"></div>
          </div>
          <MenuList list={menu4} showMenuItems={showMenuItems} />
        </div>
        <div className="">
          <div className="relative ">
            <h4 className="relative uppercase pl-6 text-xs text-[#B5B3B8] mt-2 mr-10 z--10">Charts & Maps</h4>
            <div className="absolute top-1/2 right-0  mr-6 w-2/5 h-[1px] bg-[#B5B3B8]"></div>
          </div>
          <MenuList list={menu5} showMenuItems={showMenuItems} />
        </div>
        <div className="">
          <div className="relative">
            <h4 className="relative uppercase pl-6 text-xs text-[#B5B3B8] mt-2 mr-10 z--10">Misc</h4>
            <div className="absolute top-1/2 right-0  mr-6 w-2/3 h-[1px] bg-[#B5B3B8]"></div>
          </div>
          <MenuList list={menu6} showMenuItems={showMenuItems} />
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
