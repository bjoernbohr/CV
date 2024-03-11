import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_yHNNeWQuVekqanTy4sT9gDj2aBHKzVk",
  authDomain: "whattoflix-2c8e0.firebaseapp.com",
  projectId: "whattoflix-2c8e0",
  storageBucket: "whattoflix-2c8e0.appspot.com",
  messagingSenderId: "",
  appId: "1:518573499670:web:2d89201681a07f2fbf1c37"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentifizierungszustand mit AsyncStorage speichern
const saveAuthState = async (user: User | null) => {
  try {
    await AsyncStorage.setItem('auth_state', JSON.stringify(user));
  } catch (error) {
    console.error('Error saving auth state to AsyncStorage:', error);
  }
};

// Überwachen Sie Änderungen am Authentifizierungszustand
onAuthStateChanged(auth, (user) => {
  saveAuthState(user);
});

const firestore = getFirestore(app);

// Exportieren Sie auth und firestore
export { auth, firestore };
