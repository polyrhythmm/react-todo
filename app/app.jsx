
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();

 store.subscribe(() => {
   console.log('New state', store.getState());
 })

store.dispatch(actions.addToDo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());
//Load foundation-min
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('app')
);
