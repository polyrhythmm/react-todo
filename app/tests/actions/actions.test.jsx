var expect = require('expect');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/'

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var result = actions.setSearchText(action.searchText);

    expect(result).toEqual(action);
  });

  it('should toggle showcompleted', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    var result = actions.toggleShowCompleted();

    expect(result).toEqual(action);
  });

  it('should generate add to do action', () => {
    var action = {
      type:"ADD_TODO",
      todo: {
        id: 'abc123',
        text: 'Walk the dog',
        completed: false,
        createdAt: 0
      }
    }

    var result = actions.addToDo(action.todo)

    expect(result).toEqual(action)
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    var todoText = "My todo item";

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: "ADD_TODO"
      });

      expect(actions[0].todo).toInclude({
        text:todoText
      });

      done();
    }).catch(done());
  })

  it('should generate add todos action object', () => {
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

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });
  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {completed: false}
    }

    var result = actions.updateTodo(action.id, action.updates);
     expect(result).toEqual(action)
  });

  describe("Tests with firebase todos", () => {
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'Something to do',
        completed: false,
        createdAt: 23432423
      }).then(() => done()
      )
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    })

    it('should toggle todo and disptch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: "UPDATE_TODO",
          id: testTodoRef.key
        })

        expect(mockActions[0].updates).toInclude({
          completed:true
        })

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done())
    })
  })
})
