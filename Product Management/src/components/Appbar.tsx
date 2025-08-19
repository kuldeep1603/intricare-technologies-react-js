import React from "react";
import Icon from "./Icon";
import Image from "./Image";

interface Appbarprops {
  show: boolean;
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Appbar = ({ show, setshow }: Appbarprops) => {
  return (
    <header className="h-16 bg-white shadow-lg flex items-center justify-between px-4">
      <Icon title="bar" width={24} height={24} onClick={() => setshow(!show)} />
      <div className="flex gap-1 items-center">
        <Icon
          title="notification"
          width="28px"
          height="28px"
          onClick={() => {
            setshow(!show);
          }}
        />
        <Image
          src="/assets/img/self.jpeg"
          className="w-7 object-center	object-cover h-7 rounded-full"
          title="logo"
          alt="logo"
        />
      </div>
    </header>
  );
};

export default Appbar;
