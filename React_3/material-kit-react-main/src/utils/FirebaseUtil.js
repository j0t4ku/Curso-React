// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps, getApp  } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { collection, doc, setDoc, getFirestore, getDocs, deleteDoc  } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
// TODO: Add SDKs for Firebase products that you want to , deleteDocuse
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAR-je2QYuMfDiVkTZ7uN0sexXO9CSSOzE",
  authDomain: "ejemplo-sistema.firebaseapp.com",
  projectId: "ejemplo-sistema",
  storageBucket: "ejemplo-sistema.appspot.com",
  messagingSenderId: "806409296822",
  appId: "1:806409296822:web:3f727ce78255eb5c57bf17",
  measurementId: "G-RMKG7F6BC3"
};



 export function firebaseConfig() {
    getApps().length === 0 ? initializeApp(config) : getApp();
    
}

export function firebaseRegistrarUsuario(email,pass){

    createUserWithEmailAndPassword(getAuth(),email, pass).then(
        credentialUser => {
            
        });

}
export async function firebaseIniciarSesion(email, password){
  try{
    let sesion= await signInWithEmailAndPassword(getAuth(), email, password);
  }catch{
    return false;
  }
  return true;
  
}


export async function firebaseListar(coleccion){
  let list=[]
   let consult = collection(getFirestore(),coleccion);
   let result= await getDocs(consult);
   result.forEach(element => {
      let object= element.data();
      object.id= element.id;
      list.push(object);
   });

   return list;

}


// documento es el objeto que se quiere guardar
export async function firebaseCrear(coleccion, documento){
  
  await setDoc(doc(getFirestore(), coleccion, uuidv4()), {
    email: documento.email,
    name: documento.name,
    location: documento.location,
    phone: documento.phone
   });
  
}

export async function firebaseEliminar(coleccion, id){
    await deleteDoc(doc(getFirestore(), coleccion, id));
}

