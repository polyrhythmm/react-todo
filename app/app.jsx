var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {hashHistory} = require('react-router');

import firebase from 'app/firebase/';
import router from 'app/router/'
var actions = require('actions');
var store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(actions.login(user.uid))
    store.dispatch(actions.startAddTodos());
    console.log("onAuthStateChanged")
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/')
  }
})

store.subscribe(() => {
  console.log(store.getState())
})



//Load foundation-min
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
    document.getElementById('app')
);
