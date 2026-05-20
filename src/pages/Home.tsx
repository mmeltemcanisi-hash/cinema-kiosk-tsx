import { Link } from "react-router";
import { ROUTES } from "../constants";
import logo from "../assets/logo.png";
import "../components/Logo/Logo.css";

const Home = () => {
  return (
    <article className="home">
      <p className="welkom">welkom bij</p>

      <Link to={ROUTES.FILMS} className="logo logo--big">
        <img src={logo} alt="Kinepolis" className="logo__image" />
      </Link>

      <Link role="button" to={ROUTES.FILMS} className="btn primary">
        Start
      </Link>
    </article>
  );
};

export default Home;