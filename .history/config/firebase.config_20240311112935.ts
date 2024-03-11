import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCypIXhoKsnMgKA_CGm5scaZCcJ9Otetrk",
  authDomain: "portfolio-f34f9.firebaseapp.com",
  projectId: "portfolio-f34f9",
  storageBucket: "portfolio-f34f9.appspot.com",
  messagingSenderId: "958092018905",
  appId: "1:958092018905:web:8228f1f9b95ce3561d6ac8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firestore = getFirestore(app);

export { auth, firestore };
