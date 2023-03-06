import './component/Login.css';
import './component/Home.css';
import './component/ChangePassword.css';
import Home from './component/Home';
import Login from './component/Login';
import ChangePassword from './component/ChangePassword';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
function Hello() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path='/ChangePassword'>
          <ChangePassword />
        </Route>

        <Route path='/Home'>

          <Home />
        </Route>

        <Login />

      </Switch>

    </BrowserRouter>
  );
}
export default Hello