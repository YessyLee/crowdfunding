import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PostProjectPage from "./pages/PostProjectPage";
import PledgePage from "./pages/PledgePage";
import ContactPage from "./pages/ContactPage";
import AllProjectsPage from "./pages/AllProjectsPage";



// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";


//CSS
import "./App.css"

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null);
  
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/registration", element: <RegistrationPage />},
      { path: "/pledges", element: <PledgePage />},
      { path: "/postproject", element: <PostProjectPage />},
      { path: "/contact", element: <ContactPage />},
      { path: "/allprojects", element: <AllProjectsPage />},
        //WIP - Add user profile path when ready//
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
