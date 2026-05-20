import { Outlet } from "react-router";
import Nav from "../components/Nav/Nav";

const NavLayout = () => {
  return (
    <>
      <Nav />

      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
