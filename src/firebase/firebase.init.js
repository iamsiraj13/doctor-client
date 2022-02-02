 
import { initializeApp } from "firebase/app"; 
import { firebaseConfig } from "./firebase.config";

// Initialize Firebase

const initialFirebase=()=>{
    const app = initializeApp(firebaseConfig);

}

export default initialFirebase;