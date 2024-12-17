import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLoyOut from "./components/MainLoyOut";
import Login from "./pages/Login";
import Regicter from "./pages/Regicter";
import Home from "./pages/Home";
import ProtectedRore from "./components/ProtectedRore";

function App() {
  const user = false;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRore user={user}>
          <MainLoyOut />
        </ProtectedRore>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Regicter />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
