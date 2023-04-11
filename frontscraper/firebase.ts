import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-WeTdyCAbZpFo8WbAgFQhSUK9U9JYUk8",
  authDomain: "brightdata-build.firebaseapp.com",
  projectId: "brightdata-build",
  storageBucket: "brightdata-build.appspot.com",
  messagingSenderId: "20109006966",
  appId: "1:20109006966:web:ba7a573ce168acc36fe757",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
