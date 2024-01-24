import React, { useState } from "react";
import MenuItems from "./menuitems";
import MenuIcons from "./menuicons";

const MenuList = ({ showMenuItems, showSidebarIcons,  list = [] }) => {

  return (
    <div>
      <div>
        {list && list && list.length
          ? list.map((listItem, index) => {
              return (
                <div>
                  {showSidebarIcons && <MenuIcons icon={listItem} />}
                  {showMenuItems && <MenuItems showMenuItems={showMenuItems} items={listItem} i={index} />}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MenuList;
