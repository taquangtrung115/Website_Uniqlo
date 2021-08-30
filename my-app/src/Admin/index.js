import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import Login from "./screens/Login/index";


class index extends Component {
  
  
  render() {
    return (
      <Router>
       
              <Switch>
                <Route to="/admin" component={Login} />
                {/* <Route to="/admin/home" component={Home} /> */}
              </Switch>
            
      </Router>
    );
  }
}

export default index;
