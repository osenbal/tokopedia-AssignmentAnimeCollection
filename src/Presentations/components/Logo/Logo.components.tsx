import React from "react";

type LogoProps = {
  style?: React.CSSProperties;
  className?: string;
  classNameImg?: string;
  styleImg?: React.CSSProperties;
};

const Logo: React.FC<LogoProps> = ({
  style = {},
  className = "",
  classNameImg = "",
  styleImg = {
    width: "140px",
    height: "32px",
  },
}) => {
  return (
    <div style={style} className={className}>
      <img
        style={styleImg}
        className={classNameImg}
        src="./assets/icons/ico_logoOnime.svg"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
