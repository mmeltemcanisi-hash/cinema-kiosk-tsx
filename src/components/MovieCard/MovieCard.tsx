import Button from "../Button/Button";
import "./MovieCard.css";

type MovieCardProps = {
  id: string;
  title: string;
  poster: string;
  genre: string;
  duration: number;
  synopsis: string;
};

const MovieCard = ({
  id,
  title,
  poster,
  genre,
  duration,
  synopsis,
}: MovieCardProps) => {
  return (
    <article className="movie-card">
      <img src={poster} alt={title} className="movie-card__poster" />

      <div className="movie-card__info">
        <h2 className="movie-card__title">{title}</h2>

        <p className="movie-card__label">Genre</p>
        <p className="movie-card__value">{genre}</p>

        <p className="movie-card__label">Duur</p>
        <p className="movie-card__value">{duration} min</p>

        <p className="movie-card__label">Synopsis</p>
        <p className="movie-card__value movie-card__synopsis">{synopsis}</p>
      </div>

      <footer className="movie-card__action">
        <Button link={`/films/${id}`}>Kies</Button>
      </footer>
    </article>
  );
};

export default MovieCard;
