import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
}

export var addToDo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export var startAddTodo = (text) => {

  return (dispatch, getState) => {

    var todo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
    }

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addToDo({
        ...todo,
        id: todoRef.key
      }))
    }, (e) => {

    })
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
