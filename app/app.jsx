var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
 
import ToDoApp from 'ToDoApp';
import Login from 'Login';

var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');

store.dispatch(actions.startAddTodos())

//Load foundation-min
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={ToDoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
    document.getElementById('app')
);
