import "./assets/css/App.css";
import {AuthProvider} from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Show from "./components/team/Show";
import ProtectedRoute from "./ProtectedRoute";
import WithoutProted from "./WithoutProted";
import FormHero from "./components/team/addHero/FormHero";
import PageLogin from "./pages/PageLogin";
import PageTeam from "./pages/PageTeam";
import { Provider } from "react-redux";
import generateStore from "./redux/store"
function App(): JSX.Element {
  const store = generateStore()

  return (
    <>
      <AuthProvider>

      <Provider store={store}>
        <Router>
          <Navbar/>

            <div className="main container-width mt-2">

              <Switch>
              <ProtectedRoute path="/team/add" component={FormHero} />
              <ProtectedRoute path="/team/:id" component={Show}  exact />
              <ProtectedRoute path="/team" component={PageTeam} />
              <WithoutProted path="/login" component={PageLogin}  exact/>
              <WithoutProted path="/" component={PageLogin}  exact/>
              <Route path="/:rest*"><NotFound/></Route>
              </Switch>


            </div>
          <Footer/>
        </Router>
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
