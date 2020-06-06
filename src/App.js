import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoreInfo from "./components/MoreInfo.js";
import { createPortal } from 'react-dom';
import Info from "./components/Info.js"



class App extends Component {
  render() {
        return(
          <div>
          <Router>
          <Route path="/" exact component={Info} />
          <Route path="/MoreInfo.js" component={MoreInfo} />
          </Router>
      </div>
      )
    }  
}

export default App;
