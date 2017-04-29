var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo')
describe("ToDoList", () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    },
    {
      id: 2,
      text: 'Check mail'
    }];

    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var toDosComponents =TestUtils. scryRenderedComponentsWithType(toDoList, ToDo);

    expect(toDosComponents.length).toBe(todos.length)
  });

  it('should render empty message if no todos', () => {
    var todos = [];

    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(toDoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
