import React from "react";
import Icon from "./Icon";

interface Props {
  title?: string;
  classname?: string;
  style?: React.CSSProperties;
  type: "button" | "submit" | "reset";
  name?: string;
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  id?: string;
  onClick?: () => void;
  onmouseover?: () => void;
  onmouseout?: () => void;
  onfocus?: () => void;
  onblur?: () => void;
  onmousedown?: () => void;
  onmouseup?: () => void;
  onkeydown?: () => void;
  onkeyup?: () => void;
  onkeypress?: () => void;
  icon?: boolean;
  iconTitle?: string;
  iconClassname?: string;
}

const Button: React.FC<Props> = ({
  title,
  classname = "",
  style,
  onClick,
  type,
  name,
  value,
  disabled,
  autofocus,
  id,
  onmouseover,
  onmouseout,
  onfocus,
  onblur,
  onmousedown,
  onmouseup,
  onkeydown,
  onkeyup,
  onkeypress,
  icon,
  iconTitle = "icon",
  iconClassname,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        name={name}
        value={value}
        autoFocus={autofocus}
        id={id}
        className={`btn  font-medium text-[16px] text-center  transition duration-300 ease-in-out flex gap-2 items-center justify-center ${classname}`}
        style={style}
        onClick={onClick}
        onMouseOver={onmouseover}
        onMouseOut={onmouseout}
        onFocus={onfocus}
        onBlur={onblur}
        onMouseDown={onmousedown}
        onMouseUp={onmouseup}
        onKeyDown={onkeydown}
        onKeyUp={onkeyup}
        onKeyPress={onkeypress}
      >
        {icon && <Icon title={iconTitle} classname={iconClassname} />}
        {title}
      </button>
    </>
  );
};

export default Button;
