import {
  MdOutlineEmail,
  MdOutlineChatBubbleOutline,
  MdOutlineShoppingCart,
  MdOutlineLockOpen 
} from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { RiTruckLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { TbListDetails } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxExternalLink } from "react-icons/rx";
import { LiaCircleSolid } from "react-icons/lia";

export const AppsPagesSidemenu = [
  {
    id: 1,
    icon: <MdOutlineEmail size={30} />,
    label: "Email",
    to: "/email",
  },
  {
    id: 2,
    icon: <MdOutlineChatBubbleOutline size={30} />,
    label: "Chat",
    to: "/email",
  },
  { id: 3, icon: <CiCalendar size={30} />, label: "Calendar", to: "/email" },
  { id: 4, icon: <TbListDetails size={30} />, label: "Kanban", to: "/email" },
  {
    id: 5,
    icon: <MdOutlineShoppingCart size={30} />,
    label: "eCommerce",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Dashboard",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Products",
        to: "details",
        children: [
          {
            label: "Product List",
            to: "/email",
          },
          {
            label: "Add Product",
            to: "/email",
          },
          {
            label: "Category List",
            to: "/email",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Order",
        to: "details",
        children: [
          {
            label: "Order List",
            to: "/email",
          },
          {
            label: "Order Details",
            to: "/email",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Customer",
        to: "details",
        children: [
          {
            label: "All Customer",
            to: "/email",
          },
          {
            label: "Customer Details",
            to: "/email",
            children: [
              {
                label: "Overview",
                to: "/overview",
              },
              {
                label: "Security",
                to: "/overview",
              },
              {
                label: "Address & Billing",
                to: "/overview",
              },
              {
                label: "Notifications",
                to: "/overview",
              },
            ],
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Manage Reviews",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Referrals",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Settings",
        to: "details",
        children: [
          {
            label: "Store Details",
            to: "/store-details",
          },
          {
            label: "Payments",
            to: "/store-details",
          },
          {
            label: "Checkout",
            to: "/store-details",
          },
          {
            label: "Shopping & Delivery",
            to: "/store-details",
          },
          {
            label: "Locations",
            to: "/store-details",
          },
          {
            label: "Notifications",
            to: "/store-details",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: <BsJournalBookmarkFill size={30} />,
    label: "Academy",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Dashboard",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "My Course",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Course Details",
        to: "details",
      },
    ],
  },
  {
    id: 7,
    icon: <RiTruckLine size={30} />,
    label: "Logistics",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Dashboard",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Fleet",
        to: "details",
      },
    ],
  },
  {
    id: 8,
    icon: <SlNotebook size={30} />,
    label: "Invoice",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "List",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Preview",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Edit",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Add",
        to: "details",
      },
    ],
  },
  {
    id: 9,
    icon: <FaRegUser size={30} />,
    label: "Users",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "List",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "View",
        to: "details",
        children: [
          {
            label: "Account",
            to: "/account",
          },
          {
            label: "Security",
            to: "/account",
          },
          {
            label: "Billing & Plans",
            to: "/account",
          },
          {
            label: "Notifications",
            to: "/account",
          },
          {
            label: "Connections",
            to: "/account",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    icon: <IoSettingsOutline size={30} />,
    label: "Roles & Permission",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Roles",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Permission",
        to: "details",
      },
    ],
  },
  {
    id: 11,
    icon: <GrDocumentText size={30} />,
    label: "Pages",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "User Profile",
        to: "details",
        children: [
          {
            label: "Profile",
            to: "/profile",
          },
          {
            label: "Teams",
            to: "/profile",
          },
          {
            label: "Projects",
            to: "/profile",
          },
          {
            label: "Connections",
            to: "/profile",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Account Settings",
        to: "details",
        children: [
          {
            label: "Account",
            to: "/account",
          },
          {
            label: "Security",
            to: "/account",
          },
          {
            label: "Billing & Plans",
            to: "/account",
          },
          {
            label: "Notifications",
            to: "/account",
          },
          {
            label: "Connections",
            to: "/account",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "FAQ",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Pricing",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Misc",
        to: "details",
        children: [
          {
            label: "Error",
            to: "/error",
          },
          {
            label: "Under Maintenance",
            to: "/error",
          },
          {
            label: "Coming Soon",
            to: "/error",
          },
          {
            label: "Not Authorized",
            to: "/error",
          },
          {
            label: "Server Error",
            to: "/error",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    icon: <MdOutlineLockOpen size={30} />,
    label: "Authentications",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Login",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "/basic",
          },
          {
            label: "Cover",
            to: "/basic",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Register",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "/basic",
          },
          {
            label: "Cover",
            to: "/basic",
          },
          {
            label: "Multi-steps",
            to: "/basic",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Verify Email",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "/basic",
          },
          {
            label: "Cover",
            to: "/basic",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Reset Password",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "/basic",
          },
          {
            label: "Cover",
            to: "/basic",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Forgot Password",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "/basic",
          },
          {
            label: "Cover",
            to: "/basic",
          },
        ],
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Two Steps",
        to: "details",
        children: [
          {
            label: "Basic",
            to: "/basic",
          },
          {
            label: "Cover",
            to: "/basic",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    icon: <HiOutlineDotsHorizontal size={30} />,
    label: "Wizard Examples",
    to: "/profile",
    children: [
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Checkout",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Property Listing",
        to: "details",
      },
      {
        icon: <LiaCircleSolid size={20} />,
        label: "Create Deal",
        to: "details",
      },
    ],
  },
  {
    id: 14,
    icon: <RxExternalLink size={30} />,
    label: "Modal Examples",
    to: "/modal-examples",
  },
];

export default AppsPagesSidemenu;
