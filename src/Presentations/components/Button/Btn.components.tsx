/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC, ReactNode, useState, useRef, useEffect } from "react";

type BtnProps = {
  style?: React.CSSProperties;
  className?: string;
  styleBtn?: React.CSSProperties;
  classNameBtn?: string;
  text?: string;
  onClick?: () => void;
  size: "xSmall" | "small" | "medium" | "large";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isDropdown?: boolean;
  menuDropdown?: ReactNode;
};

const BtnCss = {
  self: css({
    width: "100%",
    height: "100%",
    position: "relative",
  }),
  btn: css({
    border: "none",
    outline: "none",
    fontSize: "0.875rem",
    fontWeight: "400",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
    cursor: "pointer",
    textAlign: "left",
  }),
  btnXsmall: css({
    fontSize: "0.625rem",
    padding: "4px 8px",
  }),
  btnSmall: css({
    fontSize: "0.75rem",
    padding: "8px 16px",
  }),
  btnMedium: css({
    fontSize: "1rem",
    padding: "12px 24px",
  }),
  btnLarge: css({
    fontSize: "1.25rem",
    padding: "15px 46px",
  }),
  menuDropdown: css({
    marginTop: "4px",
    position: "absolute",
    right: "0",
    width: "100%",
    zIndex: 1,
    backgroundColor: "var(--color-white)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  }),
  show: css({
    opacity: 1,
    visibility: "visible",
  }),
};

const Btn: FC<BtnProps> = ({
  style = {},
  className = "",
  styleBtn = {},
  classNameBtn = "",
  text = "",
  onClick = () => {},
  size = "medium",
  icon,
  iconPosition = "right",
  isDropdown = false,
  menuDropdown,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  // HANLDE CLICK OUTSIDE
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div css={BtnCss.self} className={className} style={style}>
      <button
        ref={ref}
        onClick={
          isDropdown ? () => setIsShowDropdown(!isShowDropdown) : onClick
        }
        css={[
          BtnCss.btn,
          size === "small" && BtnCss.btnSmall,
          size === "medium" && BtnCss.btnMedium,
          size === "large" && BtnCss.btnLarge,
          size === "xSmall" && BtnCss.btnXsmall,
        ]}
        className={classNameBtn}
        style={styleBtn}
      >
        {icon && iconPosition === "left" && icon}
        <p>{text}</p>
        {icon && iconPosition === "right" && icon}
      </button>

      {isDropdown ? (
        <div css={[BtnCss.menuDropdown, isShowDropdown ? BtnCss.show : null]}>
          {menuDropdown}
        </div>
      ) : null}
    </div>
  );
};

export default Btn;
