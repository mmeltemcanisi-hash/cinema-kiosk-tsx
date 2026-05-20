import { ROUTES } from "../../constants";
import CustomLink from "../CustomLink/CustomLink";
import Logo from "../Logo/Logo";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav">
      <nav className="container">
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <ul>
          <li>
            <CustomLink link={ROUTES.FILMS} label="Films" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
