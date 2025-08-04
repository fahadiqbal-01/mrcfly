import { useEffect, useState } from "react";
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
import Services from "./Pages/Services";
import WorkPermit from "./Pages/WorkPermit";
import StudentVisa from "./Pages/StudentVisa";
import Touristvisa from "./Pages/Touristvisa";
import NotFound from "./Pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {" "}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<TrackServices />} />
          <Route path="adminmrc" element={<AdminUpload />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="jobapplication" element={<JobApplications />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="workpermit" element={<WorkPermit />} />
          <Route path="studentvisa" element={<StudentVisa />} />
          <Route path="touristvisa" element={<Touristvisa />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
