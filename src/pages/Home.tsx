import { Link } from "react-router";
import { ROUTES } from "../constants";
import "../components/Logo/Logo.css";
import Logo from "../components/Logo/Logo";

const Home = () => {
  return (
    <article className="home">
      <p className="welkom">welkom bij</p>

      <Logo />

      <Link role="button" to={ROUTES.FILMS} className="btn primary">
        Start
      </Link>
    </article>
  );
};

export default Home;