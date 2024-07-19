import app from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiLdIUCf_yfKsQ99tMlRnk0E6yJfgyRk4",
    authDomain: "cooking-ninja-eacd9.firebaseapp.com",
    projectId: "cooking-ninja-eacd9",
    storageBucket: "cooking-ninja-eacd9.appspot.com",
    messagingSenderId: "853597138327",
    appId: "1:853597138327:web:9a68054725e4f195b528d2"
};

app.initializeApp(firebaseConfig)
const store = app.firestore()

export {store}
