import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Erreurs from './components/Errurs/Erreurs'
import RessetPassword from './components/RessetPassword/RessetPassword'
import ForgetPassword from './components/ForgetPassword/ForgetPssword';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {

  return (
    <div className="App">
      <header className="App-header">

      <Router>
      
        <Switch>
            <Route path="/login" exact>
            <Login/>
            </Route>
            <Route path="/Register" exact>
                <Register/>
               
            </Route>
            <Route path="/ForgetPassword">
                <ForgetPassword/>
               
            </Route>
            <Route path="/RessetPassword" exact>
                <RessetPassword/>
               
            </Route>
            <Route path="/Erreurs" exact>
                <Erreurs/>
               
            </Route>
            <Route path="/Home" exact>
                <Home/>
               
            </Route>
        </Switch>
      </Router>

      </header>
    </div>
  );
}

export default App;
