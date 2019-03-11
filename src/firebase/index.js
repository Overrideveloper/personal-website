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
const fbase = {database, firebase};
export default fbase;


// <h6 class="bold">AIMS</h6>
// <p><a class="black ud" href="https://github.com/Overrideveloper/SAAS-AIMS/">AIMS</a> is short for Association Information Management System. It is a management suite built to help college/university departmental and student associations optimize their operations and records</p>
// <p>It streamlines the management and records process and makes it easy to keep track of student records, exco records, financial information, association events, projects and more.</p>
// <h6 class="bold">Bavarder</h6>
// <p>
//   <a class="black ud" href="https://github.com/Overrideveloper/Bavarder">Bavarder</a> is a "lite chat/messaging app". The name "Bavarder" is French for "chat".
// </p>
// <p>
//   Bavarder was built with .NET and SignalR. It was an exploratory project into SignalR and real-time web functionalities in .NET.
// </p>
// <p>I never got around to finishing building it though. 😥</p>
