var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux')

import {ToDoApp} from 'ToDoApp';
var configureStore = require('configureStore');

import ToDoList from 'ToDoList'

var ToDoApp = require('ToDoApp');

describe("ToDoApp", () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('Should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ToDoApp/>
      </Provider>
    );

    var toDoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0]
    var toDoList = TestUtils.scryRenderedComponentsWithType(toDoApp, ToDoList);

    expect(toDoList.length).toEqual(1);
  })

});
