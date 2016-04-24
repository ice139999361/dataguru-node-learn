import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import App from './App';
import Login from './component/Login';
import TopicDetail from './component/TopicDetail';

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/topic/:id" component={TopicDetail} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
), e);
