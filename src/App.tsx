import "./App.css";
import {AuthProvider} from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Home from "./pages/Home";
import Show from "./components/team/Show";
import ProtectedRoute from "./ProtectedRoute";
import WithoutProted from "./WithoutProted";
import FormHero from "./components/team/addHero/FormHero";
import PageLogin from "./pages/PageLogin";
import PageTeam from "./pages/PageTeam";
function App(): JSX.Element {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar/>

            <div className="main container-width mt-2">
              <Switch>
              <WithoutProted path="/login" component={PageLogin} />
              <ProtectedRoute path="/team/add" component={FormHero} />
              <ProtectedRoute path="/team/:id" component={Show}  exact />
              <ProtectedRoute path="/team" component={PageTeam} />
              <WithoutProted path="/" component={Home}  exact/>
              <Route path="/:rest*"><NotFound/></Route>
              </Switch>
            </div>
          <Footer/>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
