import { lazy, FC, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Footer = lazy(
  () => import("@/Presentations/components/Footer/Footer.components")
);

const MainLayout: FC = () => {
  const [Navbar, setNavbar] = useState<FC>(() => () => <></>);
  useEffect(() => {
    import("@/Presentations/components/Navbar/Navbar.component").then(
      ({ default: Navbar }) => {
        setNavbar(() => Navbar);
      }
    );
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
