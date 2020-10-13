import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCPfZ3mqOc8SFZiilGnt_coyEEerX0IIx4",
    authDomain: "baby-names-app-db-5b7e8.firebaseapp.com",
    databaseURL: "https://baby-names-app-db-5b7e8.firebaseio.com",
    projectId: "baby-names-app-db-5b7e8",
    storageBucket: "baby-names-app-db-5b7e8.appspot.com",
    messagingSenderId: "847420383986",
    appId: "1:847420383986:web:3333f8b37ccbdc30cf266b",
    measurementId: "G-3PP436L230"
 }
  
 firebase.initializeApp(config)

 const database = firebase.database()

 export {database}