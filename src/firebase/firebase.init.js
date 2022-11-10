import { initializeApp } from 'firebase/app'

const firebaseConfig = {
     apiKey: "AIzaSyARBYhPPsYbB3fzKakHTHpgYx2EA2z6eh0",
  authDomain: "doctor-aminul.firebaseapp.com",
  projectId: "doctor-aminul",
  storageBucket: "doctor-aminul.appspot.com",
  messagingSenderId: "619818184013",
  appId: "1:619818184013:web:76ebeab7db950771439b04"
}

const app = initializeApp(firebaseConfig)

export default app;
