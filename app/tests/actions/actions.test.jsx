var expect = require('expect');
var actions = require('actions');

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
      type: 'ADD_TODO',
      text: 'Walk the dog'
    }

    var result = actions.addToDo(action.text);

    expect(result).toEqual(action)
  });

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
  })
  it('should toggle todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    var result = actions.toggleTodo(action.id);
     expect(result).toEqual(action)
  })
})
