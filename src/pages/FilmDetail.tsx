import { useState } from "react";
import { useLoaderData } from "react-router";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import type { Movie } from "./Films";
import "./FilmDetail.css";

const FilmDetail = () => {
  const movie = useLoaderData() as Movie;

  const [gekozenUur, setGekozenUur] = useState(movie.uren[0]);
  const [gekozenFormaat, setGekozenFormaat] = useState(movie.formaten[0]);

  const verderLink = `/films/${movie.id}/zitplaatsen?uur=${gekozenUur}&formaat=${gekozenFormaat}`;

  return (
    <article>
      <img
        src={movie.poster}
        alt={movie.title}
        className="film-detail__poster"
      />

      <Heading level={1}>{movie.title}</Heading>

      <p className="film-detail__label">Genre</p>
      <p className="film-detail__value">{movie.genre}</p>

      <p className="film-detail__label">Duur</p>
      <p className="film-detail__value">{movie.duration} minuten</p>

      <p className="film-detail__label">Synopsis</p>
      <p className="film-detail__value">{movie.synopsis}</p>

      <p className="film-detail__label">Acteurs</p>
      <p className="film-detail__value">{movie.acteurs.join(", ")}</p>

      <p className="film-detail__label">Regisseur(s)</p>
      <p className="film-detail__value">{movie.regisseur.join(", ")}</p>

      <p className="film-detail__label">Versies</p>
      <p className="film-detail__value">{movie.versies.join(" / ")}</p>

      <p className="film-detail__label">Uren</p>
      <div className="film-detail__grid">
        {movie.uren.map((uur) => (
          <button
            key={uur}
            type="button"
            className={`film-detail__chip ${uur === gekozenUur ? "film-detail__chip--active" : ""}`}
            onClick={() => setGekozenUur(uur)}
          >
            {uur}
          </button>
        ))}
      </div>

      <p className="film-detail__label">Formaat</p>
      <div className="film-detail__grid">
        {movie.formaten.map((formaat) => (
          <button
            key={formaat}
            type="button"
            className={`film-detail__chip ${formaat === gekozenFormaat ? "film-detail__chip--active" : ""}`}
            onClick={() => setGekozenFormaat(formaat)}
          >
            {formaat}
          </button>
        ))}
      </div>

      <footer className="film-detail__actions">
        <Button type="secondary" link="/films">
          Terug
        </Button>
        <Button link={verderLink}>
          Verder
        </Button>
      </footer>
    </article>
  );
};

export default FilmDetail;