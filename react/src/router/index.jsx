
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../view/login/login';
import Index from '../view/index/main';
import Register from '../view/register/index';
class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={()=> (
            <Redirect to={'/index'}/>
          )}/>
          <Route path="/login" exact={true} component= {Login} />
          <Route path="/register" exact={true} component= {Register} />
          <Route path="/index" exact={true} component= {Index} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routers;