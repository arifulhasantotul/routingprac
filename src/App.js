import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
   return (
      <Router>
         <Navbar></Navbar>
         <Switch>
            {/* default route  */}
            <Route exact path="/">
               <Home></Home>
            </Route>

            {/* home route  */}
            <Route path="/home">
               <Home></Home>
            </Route>
            {/* home post route  */}
            <Route exact path="/post/:id">
               <PostDetails></PostDetails>
            </Route>

            {/* friends route  */}
            <Route path="/friends">
               <Friends></Friends>
            </Route>

            {/* friend route  */}
            <Route path="/friend/:friendId">
               <FriendDetails></FriendDetails>
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
