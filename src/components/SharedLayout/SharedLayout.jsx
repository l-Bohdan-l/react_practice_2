import { Suspense } from "react";
import { ColorRing } from "react-loader-spinner";
import { Outlet } from "react-router-dom";
import Header from "../Movies/Header/Header";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <ColorRing
            wrapperStyle={{
              display: "block",
              margin: "0 auto",
            }}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
