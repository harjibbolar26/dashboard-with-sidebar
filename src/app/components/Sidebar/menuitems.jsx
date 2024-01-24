"use client";

import React, { useState } from "react";
import MenuList from "./menulist";
import { FaAngleDown, FaAngleRight, FaHome } from "react-icons/fa";

const MenuItems = ({ items, i, showMenuItems }) => {
  const [displayChildren, setDisplayChildren] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [previouslySelectedItem, setPreviouslySelectedItem] = useState(null);

  const handleToggleChildren = (currentChildren, currentIndex) => {
    setDisplayChildren({
      ...displayChildren,
      [currentChildren]: !displayChildren[currentChildren],
    });
    setPreviouslySelectedItem(selectedItem);
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === currentIndex ? null : currentIndex
    );
    // alert(selected);
  };

  return (
    <div>
      <div
        onClick={() => handleToggleChildren(items.label, i)}
        className={`item-class ${selectedItem === i ? "active" : ""}`}
        key={items.id}
      >
        <div className="flex justify-center items-center">
          <span>{items.icon}</span>
          <p className="text-lg md:text-base max-md:text-sm tracking-wide ml-2">
            {items.label}
          </p>
        </div>
        {items && items.children && items.children.length > 0 ? (
          <span className="">
            {displayChildren[items.label] ? (
              <FaAngleDown size={20} className="mr-4" />
            ) : (
              <FaAngleRight size={20} className="mr-4" />
            )}
          </span>
        ) : null}
      </div>

      {items &&
      items.children &&
      items.children.length > 0 &&
      displayChildren[items.label] ? (
        <span className="children-class">
          <MenuList showMenuItems={showMenuItems} list={items.children} />
        </span>
      ) : null}
    </div>
  );
};

export default MenuItems;
