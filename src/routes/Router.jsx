import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";
import About from "../pages/About";
import Menu from "../pages/Menu";
import FoodDetails from "../pages/FoodDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      // errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/menu/:id",
          element: <FoodDetails />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/reservation",
          element: <Reservation/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],


    },
  ]);
  