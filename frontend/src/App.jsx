import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashBoard from "../pages/DashBoard";
import supabase from "../utils/supabase";
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial session fetch
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // Auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);

        if (event === "SIGNED_IN") {
          toast.success("Logged in successfully!");
        }

        if (event === "SIGNED_OUT") {
          toast.success("Logged out successfully!");
        }
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05080d] text-white">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Toaster position="top-center" />

      <Routes>
        <Route
          path="/"
          element={session ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/dashboard"
          element={session ? <DashBoard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
