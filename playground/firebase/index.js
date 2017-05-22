import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDYqhuCLlBVv7BiSI-uKedFu0_hs9Y9HBk",
    authDomain: "polyrhythmm-todo-app.firebaseapp.com",
    databaseURL: "https://polyrhythmm-todo-app.firebaseio.com",
    projectId: "polyrhythmm-todo-app",
    storageBucket: "polyrhythmm-todo-app.appspot.com",
    messagingSenderId: "1054090204371"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: "1.0"
    },
    isRunning: true,
    user: {
      name: 'Andrew',
      age: 25
    }
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on("child_added", (snapshot) => {
    console.log("child added", snapshot.key, snapshot.val())
  });

  todosRef.push({

      text: "Walk the dog"
    
  })

  todosRef.push({

      text: "Feed the dog"

  })
