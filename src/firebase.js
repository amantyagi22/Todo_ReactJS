import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAA-6IsUvhKgyQX6YuUBTyGipJfSjZFWj8",
  authDomain: "todo-app-3d472.firebaseapp.com",
  databaseURL: "https://todo-app-3d472.firebaseio.com",
  projectId: "todo-app-3d472",
  storageBucket: "todo-app-3d472.appspot.com",
  messagingSenderId: "837583544101",
  appId: "1:837583544101:web:b22686859af9f5babb44cc",
  measurementId: "G-6K5JK664W1",
});
const db = firebaseApp.firestore();

export default db;
