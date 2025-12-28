import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashBoard from "../pages/DashBoard";
import supabase from "../utils/supabase";

const App = () => {
  const [session, setsession] = useState(null);

  const fetchsessiom = async () => {
    const usersession = await supabase.auth.getSession();
    setsession(usersession.data.session);
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setsession(session);
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetchsessiom();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={session ? <Navigate to="/dashboard" /> : <LoginPage />}
        />

        <Route
          path="/signup"
          element={session ? <Navigate to="/dashboard" /> : <SignupPage />}
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
