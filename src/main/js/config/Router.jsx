import React from "react";
import {Router, Route, browserHistory} from "react-router";
import Index from "../view/Index.jsx";
import NoMatch from "../view/NoMatch.jsx";

export default class extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="*" component={NoMatch}/>
      </Router>
    );
  }
}
