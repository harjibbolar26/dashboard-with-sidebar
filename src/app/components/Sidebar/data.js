import { LiaHomeSolid } from "react-icons/lia";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import { MdFlipToFront } from "react-icons/md";
import { LiaCircleSolid } from "react-icons/lia";

export const sidemenu = [
  {
    id: 1,
    icon: <LiaHomeSolid size={30} />,
    label: "Dashboard",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "CRM",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Analytics",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "eCommerce",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Logistics",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Academy",
        to: "details",
      },
    ],
  },
  {
    id: 2,
    icon: <TbLayoutNavbarFilled size={30} />,
    label: "Layouts",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Collapsed menu",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Collapsed navbar",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Content nav + Sidebar",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Horizontal",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Without menu",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Without navbar",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Fluid",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Container",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Blank",
        to: "details",
      },
    ],
  },
  {
    id: 3,
    icon: <MdFlipToFront size={30} />,
    label: "Front Pages",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Landing",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Pricing",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Payment",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Checkout",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Help Center",
        to: "details",
      },
    ],
  },
];

export default sidemenu;
