import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3GgBOjaVGy8exAIZJZtH5C9Tg4HURz_o",
  authDomain: "netflix-clone-fbe76.firebaseapp.com",
  projectId: "netflix-clone-fbe76",
  storageBucket: "netflix-clone-fbe76.appspot.com",
  messagingSenderId: "1074561489337",
  appId: "1:1074561489337:web:6e53c3be2e149bbc82be68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;