import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'

  var config = {
    apiKey: "myAPI",
    authDomain: "myAuthDomain",
    databaseURL: "myDatabaseURL",
    projectId: "myDatabase",
    storageBucket: "myDatabaseStorage",
    messagingSenderId: "ABC, 123"
  };

  const app = firebase.initializeApp(config);

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()

const db = firebase.database(app)
const base = Rebase.createClass(db)