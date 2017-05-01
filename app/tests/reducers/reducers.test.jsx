var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');
var todo = require('ToDo');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var result = reducers.searchTextReducer(df(''), df(action));

      expect(result).toEqual(action.searchText);
    })
  })
  describe("showCompletedReducer", () => {
    it('should return true from toggleCompleted', () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      }

      var result = reducers.showCompletedReducer(df(true), df(action));

      expect(result).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () =>{
      var action = {
        type:"ADD_TODO",
        text: "Walk the dog"
      }

      var result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toEqual(1);
      expect(result[0].text).toEqual(action.text);
    })

    it('should toggle Todo', () => {

      var todos = [{
        id: 123,
        text: 'Walk the dog',
        completed: true,
        createdAt: 123,
        completedAt: 125,
      }]

      var action = {
        type: "TOGGLE_TODO",
        id: 123
      }

      var result = reducers.todosReducer(df(todos), df(action));

      expect(result[0].completed).toBe(false);
      expect(result[0].completedAt).toEqual(undefined);
    })
  })
});
