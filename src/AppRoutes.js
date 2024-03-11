import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingContent from "./components/LandingContent";
import Redirection from "./components/Redirection";
import Breve from "./components/Breve";
import DeepLink from "./Pages/DeepLink";
import Contato from "./Pages/Contato";
import Account from "./Pages/Account";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          basename="/landing_page_synopsis"
          exact
          path="/"
          element={<LandingContent />}
        />
        <Route
          basename="/landing_page_synopsis"
          exact
          path="/redirection"
          element={<Redirection />}
        />
        <Route
          basename="/landing_page_synopsis"
          exact
          path="/em-breve"
          element={<Breve />}
        />
        <Route
          basename="/landing_page_synopsis"
          exact
          path="/app"
          element={<DeepLink type={"clube"} />}
        />
        <Route
          basename="/landing_page_synopsis"
          exact
          path="/contato"
          element={<Contato />}
        />
        <Route
          basename="/landing_page_synopsis"
          exact
          path="/conta"
          element={<Account />}
        />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
