import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBhMXltbiwNpGq5Q0ROA95PtZQzqDLoMRs",
  authDomain: "pro-71-18ddd.firebaseapp.com",
  projectId: "pro-71-18ddd",
  storageBucket: "pro-71-18ddd.appspot.com",
  messagingSenderId: "266952933739",
  appId: "1:266952933739:web:647eca657b6b843827cc2e"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

