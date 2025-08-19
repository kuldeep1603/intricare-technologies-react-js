// button components  with typescript for reusable components

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
  databstoggle?: string;
  databstarget?: string;
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
  iconstyle?: string;
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
  iconstyle,
  databstoggle,
  databstarget,
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
        className={`btn btn-primary ${classname}`}
        style={style}
        onClick={onClick}
        onMouseOver={onmouseover}
        data-bs-toggle={databstoggle}
        data-bs-target={databstarget}
        onMouseOut={onmouseout}
        onFocus={onfocus}
        onBlur={onblur}
        onMouseDown={onmousedown}
        onMouseUp={onmouseup}
        onKeyDown={onkeydown}
        onKeyUp={onkeyup}
        onKeyPress={onkeypress}
      >
        {icon && <Icon title={iconTitle} classname={`${iconstyle}`} />}
        {title}
      </button>
    </>
  );
};

export default Button;
