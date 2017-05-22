var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var todoText = this.refs.todoText.value;

    if(todoText.length > 0)
    {
        console.log(todoText, " todoText");
        dispatch(actions.startAddTodo(todoText));
        this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }

  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Enter to do label"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddToDo)
