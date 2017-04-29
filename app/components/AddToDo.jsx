var React = require('react');

var AddToDo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var text = this.refs.text.value;

    if(text.length > 0)
    {
        this.refs.text.value = '';
        this.props.onSubmitToDo(text);
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

module.exports = AddToDo;
