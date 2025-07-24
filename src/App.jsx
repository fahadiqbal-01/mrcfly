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
    // Show welcome for 2 seconds, then slide down over 1.5 seconds
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
      {/* Main website is always rendered */}
      <RouterProvider router={router} />

      {/* Welcome overlay slides down and reveals the site behind */}
      {showWelcome && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-green"
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            overflow: "hidden",
          }}
        >
          <div className="w-full h-full flex items-center justify-center animate-welcome-slide-down">
            Welcome
          </div>
          <style>
            {`
              @keyframes welcome-slide-down {
                0% {
                  transform: translateY(-100vh);
                  opacity: 0;
                }
                20% {
                  transform: translateY(0);
                  opacity: 1;
                }
                80% {
                  transform: translateY(0);
                  opacity: 1;
                }
                100% {
                  transform: translateY(100vh);
                  opacity: 0;
                }
              }
              .animate-welcome-slide-down {
                animation: welcome-slide-down 1.5s cubic-bezier(0.22, 1, 1, 1) 0s forwards;
              }
            `}
          </style>
        </div>
      )}
    </>
  );
}

export default App;
