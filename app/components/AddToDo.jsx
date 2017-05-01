var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var text = this.refs.text.value;

    if(text.length > 0)
    {

        dispatch(actions.addToDo(text));
        this.refs.text.value = '';
    } else {
      this.refs.text.focus();
    }

  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="text" placeholder="Enter to do label"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddToDo)
