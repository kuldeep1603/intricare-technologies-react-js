import React from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
  items: {
    label: string;
    to?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="">
          <ul className="flex items-center space-x-2">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="flex items-center">
                  {!isLast ? (
                    <Link
                      to={item.to || "#"}
                      className="text-secondary font-medium text-[17px] tracking-wider hover:underline capitalize"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-black font-medium text-[17px] tracking-wider capitalize">
                      {item.label}
                    </span>
                  )}

                  {!isLast && <span className="mx-1 text-gray-400">{">"}</span>}
                </li>
              );
            })}
          </ul>
          <h2 className="text-2xl mt-2 font-semibold text-[#213446]">
            {title}
          </h2>
        </div>
        <div className="back-btn">
          <Button
            type="button"
            iconTitle="right-arrow"
            icon
            title="Back"
            onClick={() => navigate(-1)}
            classname="bg-secondary py-3 px-5 rounded-md text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
