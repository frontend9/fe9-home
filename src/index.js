import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import ReactDom from "react-dom";
import Home from "./page/Home";
import MemberList from "./page/MemberList";
import "./global.less";

  ReactDom.render((
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/memberList" component={MemberList} />
        </div>
    </Router>
  ), document.getElementById("app"))
