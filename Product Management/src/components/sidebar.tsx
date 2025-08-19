import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";

interface Sidebarprops {
  show: boolean;
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ show, setshow }: Sidebarprops) => {
  const menuList = [
    {
      name: "Dashboard",
      link: "/",
      icon: "dashboards",
    },
    {
      name: "Product",
      link: "/add",
      icon: "member",
    },
    {
      name: "Enquiry",
      link: "/",
      icon: "enquiry",
    },
    {
      name: "Expenses",
      link: "/",
      icon: "Expenses",
    },
    {
      name: "Update Password",
      link: "/",
      icon: "rest_password",
    },
  ];
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setshow(false)}
        />
      )}
      <aside
        className={`fixed Sidebar lg:static top-0 left-0 flex flex-col  z-50 w-64 h-screen bg-primary text-white transform 
          ${show ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out px-3 py-4`}
      >
        <div className="logo flex gap-3 items-center">
          <Image
            src="/assets/img/self.jpeg"
            alt=""
            title=""
            className="rounded-full w-8 h-8"
          />
          <h1 className="font-semibold tracking-wide text-xl">Codeworkss</h1>
        </div>
        <nav className="flex-1 mt-6">
          <ul className="space-y-2 ">
            {menuList.map((menu, index) => {
              const { name, link } = menu;
              return (
                <Link to={link} key={index}>
                  <li
                    key={index}
                    className="flex text-white px-2 py-3 transition-all 0.3s ease-in-out gap-4 rounded-md items-center hover:bg-light_primary hover:px-3 "
                  >
                    <Icon
                      title={menu.icon}
                      classname=""
                      width={`${menu.icon === "dashboards" ? "22px" : "26px"}`}
                      height={`${menu.icon === "dashboards" ? "22px" : "26px"}`}
                    />
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
        <Button
          type="button"
          icon
          title="logout"
          iconTitle="logout"
          classname="p-4 rounded-md  flex gap-4 items-center bg-light_primary"
        />
      </aside>
    </>
  );
};

export default Sidebar;
