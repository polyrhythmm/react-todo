
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI')
 store.subscribe(() => {
   console.log('New state', store.getState());
   var state = store.getState();

   ToDoAPI.setTodos(state.todos);
 })

 var initialTodos = ToDoAPI.getTodos();
 store.dispatch(actions.addTodos(initialTodos));

//Load foundation-min
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
    document.getElementById('app')
);
