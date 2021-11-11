import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Explore from './components/Explore/Explore/Explore';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import ProductPurchase from './components/ProductPurchase/ProductPurchase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/explore/:id">
            <ProductPurchase></ProductPurchase>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
