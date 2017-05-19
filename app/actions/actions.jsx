export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
}

export var addToDo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text
  }
}

export var addTodos = (todos) => {
    return {
      type: "ADD_TODOS",
      todos
    }
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id:id
  }
}
