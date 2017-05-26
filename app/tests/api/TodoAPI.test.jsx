var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
      expect(ToDoAPI).toExist();
    });


      describe('filterTodos', () => {
        var todos = [{
          id:1,
          text: 'Some text here',
          completed: true
        },{
          id:2,
          text: 'Other text here',
          completed: false
        },{
          id:3,
          text: 'Some text here',
          completed: true
        }];

        it('should return all items if showCompleted is true', () => {
          var filterTodos = ToDoAPI.filterTodos(todos, true, '');

          expect(filterTodos.length).toBe(3);
        });

        it('should return items is showCompleted is false', () => {
          var filterTodos = ToDoAPI.filterTodos(todos, false, '');

          expect(filterTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
          var filterTodos = ToDoAPI.filterTodos(todos, true, '');

          expect(filterTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
          var filterTodos = ToDoAPI.filterTodos(todos, true, 'some');

          expect(filterTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
          var filterTodos = ToDoAPI.filterTodos(todos, true, '');

          expect(filterTodos.length).toBe(3);
        })
      });
});
