var React = require('react');
var uuid = require('node-uuid');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
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
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id)
      {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;

      }

      return todo;
    })

    this.setState({todos: updatedTodos});
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
                <ToDoList todos={filterTodos} onToggle={this.handleToggle}/>
                <AddToDo onSubmitToDo={this.handleAddToDo}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
