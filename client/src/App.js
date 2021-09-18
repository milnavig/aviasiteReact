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
          { console.log('Current route: ' + process.env.PUBLIC_URL) }
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <MainPageComponent />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/news/:id"} component={NewsPageComponent}>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/topnews"}>
            <NewsListPageComponent />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/404"}>
            <PageNotFoundComponent />
          </Route>
          <Redirect to={process.env.PUBLIC_URL + "/404"} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
