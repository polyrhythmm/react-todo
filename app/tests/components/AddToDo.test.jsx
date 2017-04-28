var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should pass to do text when form is submitted', () => {
    var spy = expect.createSpy();

    var addToDo = TestUtils.renderIntoDocument(<AddToDo onSubmitToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.text.value = "go shopping";

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith("go shopping");
  });

  it('should not pass to do text when form is submitted', () => {
    var spy = expect.createSpy();

    var addToDo = TestUtils.renderIntoDocument(<AddToDo onSubmitToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.text.value = '';

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  })
});
