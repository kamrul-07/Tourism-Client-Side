import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Header from './Component/Pages/Home/Header/Header';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
