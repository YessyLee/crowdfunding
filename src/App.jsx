import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

// Components
import Nav from "./components/Nav/nav";

//CSS
import "./App.css"

const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
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
