import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allevents from "./Pages/allevents";
import College from "./Pages/college";
import CollegeEvents from "./Pages/collegeEvents";
import CreateEvents from "./Pages/createEvents";
import HomePage from "./Pages/homePage";
import HpEvent from "./Pages/hpEvent";
import Register from "./Pages/register";
import SignUp from "./Pages/signUp";
import SignIn from "./Pages/signIn";



const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />
  },

  {
    path: "/event",
    element: <HpEvent />
  },

  {
    path: "/college",
    element: <College />
  },

  {
    path: "/createevents",
    element: <CreateEvents />
  },

  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/allevents",
    element: <Allevents />
  },

  {
    path: "/collegeevents",
    element: <CollegeEvents />
  },

  {
    path: "/signup",
    element: <SignUp />
  },

  {
    path: "/signin",
    element: <SignIn/>
  }

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
