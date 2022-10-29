import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY3F7505kazZH86rS1t3UssFKRk3yxpiU",
  authDomain: "reactproject3-paulpableo.firebaseapp.com",
  databaseURL: "https://reactproject3-paulpableo-default-rtdb.firebaseio.com",
  projectId: "reactproject3-paulpableo",
  storageBucket: "reactproject3-paulpableo.appspot.com",
  messagingSenderId: "929434386990",
  appId: "1:929434386990:web:52d27c1c48518b0f3755bf"
};

const app = initializeApp(firebaseConfig);
export default app;