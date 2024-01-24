import { ImLifebuoy } from "react-icons/im";
import { GrDocumentText } from "react-icons/gr";

export const MiscMenu = [
  {
    id: 1,
    icon: <ImLifebuoy size={30} />,
    label: "Support",
    to: "/profile",
  },
  {
    id: 2,
    icon: <GrDocumentText size={30} />,
    label: "Documentation",
    to: "/profile",
  },
];

export default MiscMenu;
