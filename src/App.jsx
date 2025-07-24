import {
  BrowserRouter as Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import TrackServices from "./Pages/TrackServices";
import AdminUpload from "./Pages/AdminUpload";
import AdminLogin from "./Pages/AdminLogin";
import PrivateRoute from "./components/PrivateRoute";
import RootLayout from "./Layouts/RootLayout";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <TrackServices /> },
        {
          path: "admin",
          element: <PrivateRoute />,
          children: [{ index: true, element: <AdminUpload /> }],
        },
        { path: "login", element: <AdminLogin /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
