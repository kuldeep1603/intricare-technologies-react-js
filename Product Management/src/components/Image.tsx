import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  title?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "image",
  title = "image",
  width,
  height,
  className,
  style,
  onClick,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      className={className}
      style={style}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default Image;
