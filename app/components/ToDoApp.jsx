var React = require('react');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid')

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id:uuid(),
          text:'Walk the dog',
          completed: false
        },
        {
          id:uuid(),
          text:'Clean the yard',
          completed: true
        },
        {
          id:uuid(),
          text:'Feed the dog',
          completed: true
        },
        {
          id:uuid(),
          text:'Pick up poop',
          completed: false
        }
      ]
    }
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
        todo.completed = !todo.completed
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
          completed: false
        }
      ]
    })
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
       <ToDoSearch onSearch={this.handleSearch}/>
       <ToDoList todos={todos} onToggle={this.handleToggle}/>
       <AddToDo onSubmitToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
