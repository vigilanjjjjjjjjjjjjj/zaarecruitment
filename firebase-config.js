import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
apiKey: "AIzaSyCW3WfGZA_XRs5hQQMl6kQiUWrq3uxEa_I",
authDomain: "zaarecruite.firebaseapp.com",
projectId: "zaarecruite",
storageBucket: "zaarecruite.firebasestorage.app",
messagingSenderId: "291551815492",
appId: "1:291551815492:web:a7910e68799f7cf76f5911"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const COLLECTION = "applicants";
export default db;
