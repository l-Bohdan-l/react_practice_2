// import { useEffect, useState } from "react";
// import { BallTriangle } from "react-loader-spinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Cast from "./components/Movies/Cast/Cast";
import Reviews from "./components/Movies/Reviews/Reviews";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/movies/:movieId",
          element: <MovieDetails />,
          children: [
            {
              path: "cast",
              element: <Cast />,
            },
            {
              path: "reviews",
              element: <Reviews />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
