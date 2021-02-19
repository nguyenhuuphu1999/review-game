import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageHome from './View/PageHome/PageHome';

function App() {
  return (
        <Router>
            <Switch>
                <Route path="/">
                    <PageHome/>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
