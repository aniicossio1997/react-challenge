import "./App.css";
import Basic from "./pages/Basic";
import {AuthProvider} from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Team from "./modules/team/Team";
import Navbar from "./parts/Navbar"
import Footer from "./parts/Footer"
import Home from "./pages/Home";
import Show from "./modules/team/Show";
import ProtectedRoute from "./ProtectedRoute";
import WithoutProted from "./WithoutProted";
import FormHero from "./modules/team/addHero/FormHero";
function App(): JSX.Element {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar/>

            <div className="main container-width mt-2">
              <Switch>
              <WithoutProted path="/login" component={Basic} />
              <ProtectedRoute path="/team/add" component={FormHero} />
              <ProtectedRoute path="/team/:id" component={Show}  exact />
              <ProtectedRoute path="/team" component={Team} />
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
