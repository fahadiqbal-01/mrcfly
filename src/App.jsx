import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import TrackServices from "./Pages/TrackServices";
import AdminUpload from "./Pages/AdminUpload";
import AdminLogin from "./Pages/AdminLogin";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import JobApplications from "./Pages/JobApplications";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<TrackServices />} />
        <Route path="admin" element={<AdminUpload />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="jobapplication" element={<JobApplications />} />
        <Route path="home" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
