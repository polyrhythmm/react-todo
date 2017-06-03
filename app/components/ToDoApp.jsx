import React from 'react';
import * as Redux from 'react-redux';
import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
import * as actions from 'actions';

export var ToDoApp = React.createClass({

  onLogout(event) {
    var {dispatch} = this.props;

    event.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <ToDoSearch/>
                <ToDoList/>
                <AddToDo/>
              </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(ToDoApp);
