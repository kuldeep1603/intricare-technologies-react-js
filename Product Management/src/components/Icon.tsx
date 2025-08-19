import React from "react";

interface Props {
  title: string;
  classname?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const Icon: React.FC<Props> = ({
  title,
  classname = "",
  style,
  width = "24px",
  height = "24px",
  onClick,
}) => {
  return (
    <svg
      className={`${classname} cursor-pointer`}
      width={width}
      height={height}
      style={style}
      onClick={onClick}
    >
      <use xlinkHref={`/assets/sprite.svg#icon-${title}`} />
    </svg>
  );
};

export default Icon;
