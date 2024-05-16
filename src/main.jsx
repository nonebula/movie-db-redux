import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Movies from "./routes/Movies";
import MovieDetail from "./routes/MovieDetail";
import Login from "./routes/Login";
import ErrorPage from "./components/ErrorPage";
import { Provider } from "react-redux";
import store from "./app/store";

//nested route structure, all pages on top of movies page, root is directing all routes
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
