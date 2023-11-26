import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB26G-uk4MVLraSpYQkBxcYkZIAcNo-Cok",
  authDomain: "restaurantapp-f01a1.firebaseapp.com",
  databaseURL: "https://restaurantapp-f01a1-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-f01a1",
  storageBucket: "restaurantapp-f01a1.appspot.com",
  messagingSenderId: "802356046647",
  appId: "1:802356046647:web:4990fbe2ca6390f01148b2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app,firestore,storage };