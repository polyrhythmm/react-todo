var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList';
import CoonectedToDo, {ToDo} from 'ToDo';

describe("ToDoList", () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },
    {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

    var store = configure({
      todos: todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )

    var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];

    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, CoonectedToDo);

    expect(toDosComponents.length).toBe(todos.length)
  });

  it('should render empty message if no todos', () => {
    var todos = [];

    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(toDoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
