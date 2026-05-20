import type { Movie } from "./pages/Films";

const getData = async (path: string, id?: string) => {
  const data = await fetch(path);
  const movies = await data.json();

  if (id) {
    return movies.find((movie: Movie) => movie.id === id);
  }

  return movies;
};

export { getData };
