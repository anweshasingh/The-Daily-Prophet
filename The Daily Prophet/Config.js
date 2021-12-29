import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAQ9PySB1iD87h9TgXMYJrW3fVyaEHgeIk",
  authDomain: "newspaper-app-5f7f3.firebaseapp.com",
  databaseURL: "https://newspaper-app-5f7f3-default-rtdb.firebaseio.com",
  projectId: "newspaper-app-5f7f3",
  storageBucket: "newspaper-app-5f7f3.appspot.com",
  messagingSenderId: "301756696873",
  appId: "1:301756696873:web:4141c28d09408195514f38"
};

if(!firebase.apps.length) {
  let app = firebase.initializeApp(firebaseConfig)
}

export default firebase.database();