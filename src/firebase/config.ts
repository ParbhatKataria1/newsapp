import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyA9DS40asOa_b-l5_4IlUTUWl7yvE9pphg',
    authDomain: 'triveous-35530.firebaseapp.com',
    projectId: 'triveous-35530',
    storageBucket: 'triveous-35530.appspot.com',
    messagingSenderId: '1049648193344',
    appId: '1:1049648193344:web:9e279ef6f28b80f7c824a5',
    measurementId: 'G-W1HX4E1RV8',
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;