import { Link } from "react-router";
import "./Klaar.css";

const Klaar = () => {
  return (
    <article className="klaar">
      <h1>Gelukt!</h1>
      <p>Bedankt voor je aankoop. Veel kijkplezier!</p>

      <Link role="button" to="/films" className="btn primary">
        Terug naar films
      </Link>
    </article>
  );
};

export default Klaar;
