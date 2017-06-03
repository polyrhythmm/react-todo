var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');
var todo = require('ToDo');

describe('Reducers', () => {
  describe('Authentication', () => {
    it('should set user id', () => {

      var action = {
        type: "LOGIN",
        uid: 123
      }

      var result = reducers.authReducer(undefined, df(action));

      expect(result).toEqual({uid: action.uid});
    })
  })

  it('should wipe auth on LOGOUT', () => {
    const authData = {
      uid: 123
    }

    const action = {
      type: "LOGOUT"
    }

    var result = reducers.authReducer(df(authData), df(action));

    expect(result).toEqual({})
  })
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
        todo: {
          id: 'abc123',
          text: 'Walk the dog',
          completed: false,
          createdAt: 23235235
        }
      }

      var result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(action.todo);
    })

    it('should update Todo', () => {

      var todos = [{
        id: 123,
        text: 'Walk the dog',
        completed: true,
        createdAt: 123,
        completedAt: 125,
      }]
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: "UPDATE_TODO",
        id: todos[0].id,
        updates
      }

      var result = reducers.todosReducer(df(todos), df(action));

      expect(result[0].completed).toBe(updates.completed);
      expect(result[0].completedAt).toEqual(updates.completedAt);
      expect(result[0].text).toEqual(todos[0].text);
    })
    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type: "ADD_TODOS",
        todos
      }

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    })
  })
});
