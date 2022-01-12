import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpkR_Wblgp7iD94jkJAelvTfWcWPG_ouo",
  authDomain: "shb-ecommerce.firebaseapp.com",
  projectId: "shb-ecommerce",
  storageBucket: "shb-ecommerce.appspot.com",
  messagingSenderId: "293347109397",
  appId: "1:293347109397:web:b2e87232d16079e397fc1c",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
