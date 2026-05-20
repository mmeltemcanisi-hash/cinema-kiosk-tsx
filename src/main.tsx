import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { getData } from "./helpers";
import NavLayout from "./layouts/NavLayout";
import CenteredLayout from "./layouts/CenteredLayout";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDetail from "./pages/FilmDetail";
import Zitplaatsen from "./pages/Zitplaatsen";
import Betaalmethode from "./pages/Betaalmethode";
import Verwerking from "./pages/Verwerking";
import Klaar from "./pages/Klaar";


const router = createBrowserRouter([
  {
    element: <CenteredLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/films/:id/verwerking", element: <Verwerking /> },
      { path: "/films/:id/klaar", element: <Klaar /> },
    ],
  },
  {
    element: <NavLayout />,
    children: [
      {
        path: "/films",
        loader: async () => getData("/src/data/movies.json"),
        element: <Films />,
      },
      {
        path: "/films/:id",
        loader: async ({ params }) =>
          getData("/src/data/movies.json", params.id),
        element: <FilmDetail />,
      },
      {
        path: "/films/:id/zitplaatsen",
        loader: async ({ params }) =>
          getData("/src/data/movies.json", params.id),
        element: <Zitplaatsen />,
      },
      {
        path: "/films/:id/betaalmethode",
        loader: async ({ params }) =>
          getData("/src/data/movies.json", params.id),
        element: <Betaalmethode />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
