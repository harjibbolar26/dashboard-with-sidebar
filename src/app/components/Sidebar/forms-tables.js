import { LiaCircleSolid, LiaWpforms, LiaTableSolid } from "react-icons/lia";
import { RxCube } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
import { FaTable } from "react-icons/fa";

export const FormsTablesMenu = [
  {
    id: 1,
    icon: <LiaWpforms size={30} />,
    label: "Form Elements",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Basic INputs",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Input groups",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Custom Options",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Editors",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "File Upload",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Pickers",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Select & Tags",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Sliders",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Switches",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Extras",
        to: "details",
      },
    ],
  },
  {
    id: 2,
    icon: <RxCube size={30} />,
    label: "Form Layouts",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Vertical Form",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Horizontal Form",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Sticky Actions",
        to: "details",
      },
    ],
  },
  {
    id: 3,
    icon: <HiOutlineDotsHorizontal size={30} />,
    label: "Form Wizard",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Numbered",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Icons",
        to: "details",
      },
    ],
  },
  {
    id: 4,
    icon: <FiCheckCircle size={30} />,
    label: "Form Validation",
    to: "/profile",
  },
  {
    id: 5,
    icon: <FaTable size={30} />,
    label: "Tables",
    to: "/profile",
  },
  {
    id: 6,
    icon: <LiaTableSolid size={30} />,
    label: "Datatables",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Basic",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Advanced",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Extensions",
        to: "details",
      },
    ],
  },
];

export default FormsTablesMenu;
