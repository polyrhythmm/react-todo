var React = require('react');
var uuid = require('node-uuid');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';

var ToDoSearch = require('ToDoSearch');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  handleAddToDo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <ToDoSearch onSearch={this.handleSearch}/>
                  <ToDoList/>
                <AddToDo onSubmitToDo={this.handleAddToDo}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
