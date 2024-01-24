import { LiaCircleSolid } from "react-icons/lia";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { IoMapOutline } from "react-icons/io5";

export const ChartsMapsMenu = [
  {
    id: 1,
    icon: <BiSolidDoughnutChart size={30} />,
    label: "Charts",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Apex Charts",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "ChartsJS",
        to: "details",
      },
    ],
  },
  {
    id: 2,
    icon: <IoMapOutline size={30} />,
    label: "Leaflet Maps",
    to: "/profile",
  },
];

export default ChartsMapsMenu;
