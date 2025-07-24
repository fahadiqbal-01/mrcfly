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
import Applications from "./Pages/Applications";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome for 2 seconds, then fade out over 1 second
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<TrackServices />} />
        <Route path="admin" element={<AdminUpload />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="jobapplication" element={<JobApplications />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="applications" element={<Applications />} />
      </Route>
    )
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-green transition-opacity duration-1000 ease-out ${
          showWelcome
            ? "opacity-100 pointer-events-auto animate-welcome-slide-up"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        Welcome
        <style>
          {`
          @keyframes welcome-slide-up {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            80% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh);
              opacity: 0;
            }
          }
          .animate-welcome-slide-up {
            animation: welcome-slide-up 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}
        </style>
      </div>
      {!showWelcome && <RouterProvider router={router} />}
    </>
  );
}

export default App;
