import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBt1WUmrT6he8_p1YjNHGu5HHnCdBRHkuU",
  authDomain: "link-in-bio-aa489.firebaseapp.com",
  projectId: "link-in-bio-aa489",
  storageBucket: "link-in-bio-aa489.firebasestorage.app",
  messagingSenderId: "355679338160",
  appId: "1:355679338160:web:e4ba5b150da7e287d40575",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
