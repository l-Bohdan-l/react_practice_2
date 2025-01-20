// import { useEffect, useState } from "react";
// import { BallTriangle } from "react-loader-spinner";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
// import Cast from "./components/Movies/Cast/Cast";
// import Reviews from "./components/Movies/Reviews/Reviews";
const Cast = lazy(() => import("./components/Movies/Cast/Cast"));
const Reviews = lazy(() => import("./components/Movies/Reviews/Reviews"));

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
              element: (
                <Suspense fallback={<div>Loading cast...</div>}>
                  <Cast />
                </Suspense>
              ),
            },
            {
              path: "reviews",

              element: (
                <Suspense fallback={<div>Loading ...</div>}>
                  <Reviews />
                </Suspense>
              ),
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
