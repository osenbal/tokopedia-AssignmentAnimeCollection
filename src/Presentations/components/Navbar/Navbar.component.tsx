/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { lazy, FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { mq } from "@/Presentations/constant/breakpoint";

const Logo = lazy(
  () => import("@/Presentations/components/Logo/Logo.components")
);

// styled for Navbar mobile first
const navbarCss = {
  self: css({
    display: "flex",
    flexDirection: "row",
    position: "relative",
    zIndex: 1,
    [mq[0]]: {
      position: "fixed",
      top: 18,
      width: "100%",
      justifyContent: "center",
      left: 0,
    },
  }),
  logoNavbar: css({
    display: "none",
    "& img": {
      maxHeight: "32px",
    },
    [mq[0]]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  containerListmenu: css({
    position: "fixed",
    bottom: 14,
    width: "100%",
    padding: "0 12px",
    height: "55px",
    [mq[0]]: {
      position: "relative",
      bottom: "unset",
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "640px",
      height: "64px",
      backgroundColor: "var(--color-teal)",
      borderRadius: "14px",
      padding: "0 41px",
    },
  }),
  listMenu: css({
    backgroundColor: "var(--color-teal)",
    borderRadius: "50px",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    "& li": {
      padding: "0 10px",
    },
    [mq[0]]: {
      backgroundColor: "unset",
      width: "100%",
    },
  }),
  linkMenu: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    rowGap: "4px",
    color: "var(--color-white)",
    "& p": {
      fontSize: "12px",
      fontWeight: "400",
      [mq[0]]: {
        fontSize: "18px",
        fontWeight: "500",
      },
    },
    "& img": {
      width: "18px",
      height: "18px",
      [mq[0]]: {
        display: "none",
      },
    },
  }),
};

const Navbar: FC = () => {
  // handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        if (window.pageYOffset > 0) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav css={navbarCss.self}>
      <div css={navbarCss.containerListmenu}>
        <Logo css={navbarCss.logoNavbar} />
        <ul css={navbarCss.listMenu}>
          <li>
            <NavItem
              to="/"
              icon="./assets/icons/ico_menu_home.svg"
              text="Home"
            />
          </li>
          <li>
            <NavItem
              to="/collections"
              icon="./assets/icons/ico_menu_collections.svg"
              text="Collections"
            />
          </li>
          <li>
            <NavItem
              to="/profile"
              icon="./assets/icons/ico_menu_profile.svg"
              text="Profile"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

type NavItemProps = {
  to: string;
  icon: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ to, icon, text }) => {
  return (
    <NavLink to={to} css={navbarCss.linkMenu}>
      <img src={icon} alt={text} />
      <p>{text}</p>
    </NavLink>
  );
};

export default Navbar;
