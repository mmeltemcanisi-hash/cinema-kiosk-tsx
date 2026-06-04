import { Link } from "react-router";
import { ROUTES } from "../../constants";
import logo from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to={ROUTES.HOME} className="logo">
      <img src={logo} alt="KINEPOLIS" className="logo__img" />
    </Link>
  );
};

export default Logo;