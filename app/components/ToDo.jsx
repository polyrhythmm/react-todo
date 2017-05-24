var React = require('react');
var moment = require('moment');
var actions = require('actions');
var {connect} = require('react-redux');

export var ToDo = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var toDoClassName = completed ? 'todo todo-completed' : 'todo';
var renderDate = () => {
  var message = "Created ";
  var timestamp = createdAt;
  if(completed) {
    message = 'Completed ';
    timestamp = completedAt;
  }
  return message + moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm A');
};


    return (
      <div className={toDoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>
            {text}
          </p>
          <p className="todo__subtext">
            {renderDate()}
          </p>
        </div>
      </div>
    )
  }
});

export default connect()(ToDo);
