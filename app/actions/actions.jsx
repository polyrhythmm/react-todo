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

export var startAddTodos = () => {
  return (dispatch, getState) => {
  return firebaseRef.once('value').then((snapshot) => {
      var obj = snapshot.val() || {};
      var array = Object.keys(obj.todos)
      var objectArray = [];

      for(var i = 0; i < array.length; i++)
      {
        var object = {
          id: array[i],
          completed: obj.todos[array[i]].completed,
          completedAt: obj.todos[array[i]].completedAt,
          text: obj.todos[array[i]].text,
          createdAt: obj.todos[array[i]].createdAt
        }

        if(object.completedAt === undefined)
        {
          object.completedAt = null;
        }

        objectArray.push(object);

      }

      dispatch(addTodos(objectArray));
      console.log(objectArray)


    })
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

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates))
    })

  }
}
