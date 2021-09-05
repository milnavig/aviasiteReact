import logo from './logo.svg';
import './App.scss';
import MainPageComponent from './components/MainPageComponent';
import NewsPageComponent from './components/NewsPageComponent';
import NewsListPageComponent from './components/NewsListPageComponent';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <MainPageComponent />
          </Route>
          <Route path="/news/:id" component={NewsPageComponent}>
          </Route>
          <Route path="/topnews">
            <NewsListPageComponent />
          </Route>
          <Route path="/404">
            <PageNotFoundComponent />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
