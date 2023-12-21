// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDV5f0uGa7j6Rle9JWpyDJDCu0aSZJ4wp0",
//   authDomain: "chat-app-c2ae5.firebaseapp.com",
//   projectId: "chat-app-c2ae5",
//   storageBucket: "chat-app-c2ae5.appspot.com",
//   messagingSenderId: "223490652902",
//   appId: "1:223490652902:web:add5e14ca16a8c01671927",
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV5f0uGa7j6Rle9JWpyDJDCu0aSZJ4wp0",
  authDomain: "chat-app-c2ae5.firebaseapp.com",
  projectId: "chat-app-c2ae5",
  storageBucket: "chat-app-c2ae5.appspot.com",
  messagingSenderId: "223490652902",
  appId: "1:223490652902:web:add5e14ca16a8c01671927",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
