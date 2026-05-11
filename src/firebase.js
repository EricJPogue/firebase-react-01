import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, /*connectAuthEmulator*/ } from "firebase/auth";
import { getFirestore, /*connectFirestoreEmulator*/  } from "firebase/firestore";
import { getStorage, /*connectStorageEmulator*/ } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkTGixviCof-K1YSFKa8MLnIbmlYR3pdk",
  authDomain: "fir-react-01-99f9f.firebaseapp.com",
  projectId: "fir-react-01-99f9f",
  storageBucket: "fir-react-01-99f9f.firebasestorage.app",
  messagingSenderId: "357030708137",
  appId: "1:357030708137:web:33f07e3fe0f4ccb399bab8"
};


const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Only connect to emulators when running locally
/*if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}*/

export { auth, provider };
export  { db };
export { storage };
