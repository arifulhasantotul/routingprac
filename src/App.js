import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import "./App.css";
import Home from "./components/Home/Home";
import Friends from "./Friends/Friends";
import NotFound from "./components/NotFound/NotFound";

function App() {
   return (
      <Router>
         <Switch>
            {/* default route  */}
            <Route exact path="/">
               <Home></Home>
            </Route>

            {/* home route  */}
            <Route path="/home">
               <Home></Home>
            </Route>

            {/* friends route  */}
            <Route path="/friends">
               <Friends></Friends>
            </Route>

            {/* about route  */}
            <Route path="/about">
               <About></About>
            </Route>

            {/* not found route  */}
            <Route path="*">
               <NotFound></NotFound>
            </Route>

            {/* switch end  */}
         </Switch>
      </Router>
   );
}

export default App;
