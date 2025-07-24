import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackServices from "./Pages/TrackServices";
import AdminUpload from "./Pages/AdminUpload";
import AdminLogin from "./Pages/AdminLogin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrackServices />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminUpload />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
