var React = require('react');
import ToDo from 'ToDo'
var {connect} = require('react-redux');
var ToDoAPI = require('ToDoAPI');

export var ToDoList = React.createClass({
  render: function () {

    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {

      var todosCompleted = 0;

      todos.forEach((todo) => {
        if(todo.completed)
        {
          todosCompleted++;
        }
      })


      if(todos.length === 0 || todosCompleted === todos.length && !showCompleted)
      {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return ToDoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ToDoList);
