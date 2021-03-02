import logo from './logo.svg';
import './App.scss';
import MainPageComponent from './components/MainPageComponent';
import NewsPageComponent from './components/NewsPageComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/">
          <MainPageComponent />
        </Route>
        <Route path="/news">
          <NewsPageComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
