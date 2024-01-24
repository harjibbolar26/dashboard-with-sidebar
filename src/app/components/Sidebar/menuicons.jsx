import React from "react";
import { FaHome } from "react-icons/fa";

const MenuIcons = ({ icon }) => {
  return (
    <div>
      <div
        className="item-class"
        key={icon.label}
      >
        <div className="flex justify-center items-center">
          <span> 
            {icon.icon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuIcons;
