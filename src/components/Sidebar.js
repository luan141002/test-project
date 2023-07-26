import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/constants/";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
  // h-screen = height:100vh=100%
  const navigate = useNavigate();
  return (
    <div className="bg-[#4E73DF] h-screen px-[25px]">
      {/* Title  */}
      <div className="px-[1px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Admin panel
        </h1>
      </div>
      {/* Dashboard */}
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          Dashboard
        </p>
      </div>
      {/* Component */}
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] flex flex-col">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          INTERFACE
        </p>

        <div className="flex flex-1 flex-col  mb-[200px]">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>

        <div className="border-t-[1px] border-[#EDEDED]/[0.3] flex flex-col ">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>

        <div
          onClick={() => navigate("/authen")}
          className={classNames(linkClass, "cursor-pointer text-red-500")}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
      <div className="flex items-center gap-[10px] ">
        <span className="text-xl text-white">{link.icon}</span>
        <Link
          to={link.path}
          // className={classNames(
          //   pathname === link.path
          //     ? "bg-neutral-700 text-white"
          //     : "text-neutral-400"
          // )}
        >
          <p className="text-[14px] leading-[20px] font-normal text-white">
            {link.label}
          </p>
        </Link>
      </div>
      <FaChevronRight color="white" />
    </div>
  );
}

export default Sidebar;
