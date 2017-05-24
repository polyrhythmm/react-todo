import firebase from 'firebase';

try {
    var config = {
      apiKey: "AIzaSyDYqhuCLlBVv7BiSI-uKedFu0_hs9Y9HBk",
      authDomain: "polyrhythmm-todo-app.firebaseapp.com",
      databaseURL: "https://polyrhythmm-todo-app.firebaseio.com",
      projectId: "polyrhythmm-todo-app",
      storageBucket: "polyrhythmm-todo-app.appspot.com",
      messagingSenderId: "1054090204371"
    };
    firebase.initializeApp(config);
} catch(e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;
