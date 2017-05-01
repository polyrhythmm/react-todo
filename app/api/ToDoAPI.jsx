var $ = require('jQuery');

module.exports = {
  setTodos:function(todos) {
    if($.isArray(todos))
    {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos:function() {
  var stringTodos = localStorage.getItem('todos');
  var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];

    if($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filterTodos = todos;

    console.log('filter todos', filterTodos);
    //Filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filterTodos = filterTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      var search = searchText.toLowerCase();
      return searchText.length === 0 || text.indexOf(search) > -1;
    });
     //Sort todos with non-completed first
    filterTodos.sort((a,b) => {
      if(!a.completed && b.completed)
      {
        return -1;
      } else if(a.completed && !b.completed)
      {
        return 1;
      } else {
        return 0;
      }
    })
    return filterTodos;
  }
};
