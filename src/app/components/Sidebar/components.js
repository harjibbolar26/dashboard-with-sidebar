import { TfiCreditCard } from "react-icons/tfi";
import { PiTrashSimple, PiCirclesThree } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { LiaCircleSolid } from "react-icons/lia";

export const ComponentsMenu = [
  {
    id: 1,
    icon: <TfiCreditCard size={30} />,
    label: "Cards",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Basic",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Advance",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Statistics",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Analytics",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Gamifications",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Actions",
        to: "details",
      },
    ],
  },
  {
    id: 2,
    icon: <PiTrashSimple size={30} />,
    label: "User interfcae",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Accordion",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Alerts",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Badges",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Buttons",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Carousel",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Colllapse",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Dropdown",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Footer",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "List Groups",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Modals",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Navbar",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Offcanvas",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Pagination & Breadcrumbs",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Progress",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Spinners",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Tabs & Pills",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Toasts",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Tooltips & Popovers",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Typography",
        to: "details",
      },
    ],
  },
  {
    id: 3,
    icon: <IoIosStarOutline size={30} />,
    label: "Extended UI",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Avatar",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "BlockUI",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Drag & Drop",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Media Player",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Perfect Scrollbar",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Star Ratings",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "SweetAlert2",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Text Divider",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Timeline",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "details",
          },
          {
            label: "Fullscreen",
            to: "details",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Tour",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Treeview",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Miscellaneous",
        to: "details",
      },
    ],
  },
  {
    id: 4,
    icon: <PiCirclesThree size={30} />,
    label: "Icons",
    to: "/profile",
  },
];

export default ComponentsMenu;
