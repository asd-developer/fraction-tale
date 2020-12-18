import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import RegisterPage from './components/RegisterPage/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Switch>
            <Route path="/register">
              <RegisterPage/>
            </Route>
            <Route path="/">
              <Game/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
