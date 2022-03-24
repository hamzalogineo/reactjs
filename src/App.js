
import {BrowserRouter, Switch , Route} from "react-router-dom";
 
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Session from "./pages/Session";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path = "/" exact component = {Home} />
      <Route path = "/a-propos" exact component = {About} />
      <Route path = "/news" exact component = {News} />
      <Route path = "/signin" exact component = {Connexion} />
      <Route path = "/signup" exact component = {Inscription} />
      <Route path = "/welcome" exact component = {Session} />
      <Route component = {NotFound} />
      </Switch> 
    </BrowserRouter>
  );
};

export default App;