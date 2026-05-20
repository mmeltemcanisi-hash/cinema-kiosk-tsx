import { useLoaderData } from "react-router";
import Heading from "../components/Heading/Heading";
import MovieCard from "../components/MovieCard/MovieCard";

type BasicMovie = {
  id: string;
  title: string;
  poster: string;
  genre: string;
  duration: number;
  synopsis: string;
};

export type Movie = BasicMovie & {
  acteurs: string[];
  regisseur: string[];
  versies: string[];
  uren: string[];
  formaten: string[];
  basePrice: number;
};

const Films = () => {
  const movies = useLoaderData() as Movie[];

  return (
    <>
      <Heading level={1}>Kies een film</Heading>

      {!movies || !movies.length
        ? "Er zijn geen films vandaag."
        : movies.map((movie: BasicMovie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              genre={movie.genre}
              duration={movie.duration}
              synopsis={movie.synopsis}
            />
          ))}
    </>
  );
};

export default Films;
