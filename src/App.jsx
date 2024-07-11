import College from "./Pages/college";
import CreateEvents from "./Pages/createEvents";
import EventPage from "./Pages/eventPage";
import SignUp from "./Pages/signUp";
import SignIn from "./Pages/signIn";
import NotFound from "./Pages/notFound";
import LandingPage from "./Pages/landingPage";
import RootLayout from "./layouts/rootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/eventpage", element: <EventPage /> },
      { path: "/college", element: <College/> },
     
      { path: "/notfound", element: <NotFound /> },
    ]
  },
  
  { path: "/createevents", element: <CreateEvents /> },

  { path: "/signup", element: <SignUp /> },

  { path: "/signin", element: <SignIn /> },


]);


function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
