import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Header from './Component/Pages/Home/Header/Header';
import Notfound from './Component/Pages/NotFound/Notfound';
import Footer from './Component/Pages/Home/Footer/Footer';
import Details from './Component/Pages/Home/Service/Details/Details';
import Login from './Component/Pages/Login';
import PrivateRoute from './Component/Pages/PrivateRoute';
import AuthProvider from './Component/Pages/Firebase/context/AuthProvider';
import Review from './Component/Pages/myOrder/Review/Review'

import Myorder from './Component/Pages/Myorder';
import AddNewService from './Component/Pages/AddNewService';
import Update from './Component/Pages/Update';



function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
         
         <Route path="/myOrder">
           <Myorder></Myorder>
         </Route>
         <Route path="/update/:upId">
           <Update></Update>
         </Route>
         <Route path="/addnewService">
           <AddNewService></AddNewService>
         </Route>
          
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path= '*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
