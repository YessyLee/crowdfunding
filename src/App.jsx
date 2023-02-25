import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

// Components
import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";

//CSS
import "./App.css"
import { useState } from "react";

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
      { path: "/", element: <HomePage /> },
      { path:"/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
