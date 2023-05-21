import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Router} from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { createBrowserHistory } from 'history';

function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route exact path="/empms" component= {EmployeeListComponent}></Route>
              <Route path="/add-employee" component= {CreateEmployeeComponent}></Route>
            </Switch>
    </div>
          <FooterComponent/>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
