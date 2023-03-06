import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PostProjectPage from "./pages/PostProjectPage";

// Components
import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";

//CSS
import "./App.css"
import { useState } from "react";
import PledgePage from "./pages/PledgePage";

// const HeaderLayout = () => (
  // <div>
    {/* <Nav /> */}
    {/* <Outlet /> */}
  {/* </div> */}
// );

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path:"/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/registration", element: <RegistrationPage />},
      { path: "/pledges", element: <PledgePage/>},
      { path: "/postproject", element: <PostProjectPage/>},
      //ADD PATH TO USER//
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
