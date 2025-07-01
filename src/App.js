import Navbar from "../Navbar";
import Contact from "./Contact";
import Home from "./Home";
import {browserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
            <Home/>
            </Route>
            <Route path='/create'>
            <create/>
            </Route>
          </Switch>
        </div>
       </div>
      </Router>
     );
}

export default App;
