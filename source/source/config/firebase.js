import {initilizeApp} from "firebase/app";
import {getFirestore} from "firebase/firesstore";
import { Constants } from "expo-constants";



const firebaseConfig = {
    apiKey: "AIzaSyBvmqvKkuypxoJOXjNFJAZnBo1pebOorZo",
    authDomain: "taller-2-64fd7.firebaseapp.com",
    projectId: "taller-2-64fd7",
    storageBucket: "taller-2-64fd7.appspot.com",
    messagingSenderId: "320608617611",
    appId: "1:320608617611:web:ce5c2b9390fbe8fa66408e",
    measurementId: "G-SDW9VG7PC0"
  };

  initilizeApp(firebaseconfig);
  

  export const baseDatos = getFirestore();