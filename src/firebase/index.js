import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAzlThdxAWQMx4bnnffzWzUzJ5Req2PuFQ",
  authDomain: "banso-wisdom.firebaseapp.com",
  databaseURL: "https://banso-wisdom.firebaseio.com",
  projectId: "banso-wisdom",
  storageBucket: "banso-wisdom.appspot.com",
  messagingSenderId: "934002954219"
};

const app = firebase.initializeApp(config);
const database = app.firestore();
database.enablePersistence();
const fbase = {database, firebase};
export default fbase;
