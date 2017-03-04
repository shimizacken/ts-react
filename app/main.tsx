import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import {RouterApp} from './router';
import {Login} from './login/components/login';
import {Projects} from './projects/components/projects';

//ReactDOM.render(<Login userName="shimiz" password="1234" />, document.getElementById('divMainContainer'));

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {RouterApp}>
         <IndexRoute component = {Login} />
         <Route path="./projects/components/projects" component = {Projects} />
      </Route>
   </Router>
	
), document.getElementById('divAppRouter'))