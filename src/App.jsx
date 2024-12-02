// import { useEffect, useState } from "react";
// import { BallTriangle } from "react-loader-spinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

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
