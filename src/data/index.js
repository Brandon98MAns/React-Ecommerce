import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, query, where, collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCm9PJcTfYmue5skvLu9lrZiPh25JLrup8",
  authDomain: "livingroom-ecfa6.firebaseapp.com",
  projectId: "livingroom-ecfa6",
  storageBucket: "livingroom-ecfa6.appspot.com",
  messagingSenderId: "958752948879",
  appId: "1:958752948879:web:e9708c5aa26e55772de6fa",
  measurementId: "G-B1GTB09TB2"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

//Obtener todos los items

export async function getAllItems(){
    //obtenemos la referencia a la coleccion de items
    const miColec = collection(firestoreDB, 'muebles');
    //obtenemos todos los items
    const mueblesSnap = await getDocs(miColec, 'muebles');
  
    return mueblesSnap.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })
  }
  //Obtener el total de productos de una categoria.
  
  export async function getItemsByCategory(categoryId) {
    const miColec = collection(firestoreDB, 'muebles');
    const queryMueble = query(miColec, where("categoria", "==", categoryId));
  
    constmueblesSnap = await getDocs(queryMueble);
    return mueblesSnap.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })
  }
  
  //Obtener un solo producto filtrado por ID.
  export async function getItem (id){
    const miColec = collection(firestoreDB, 'muebles');
    const movieRef = doc(miColec, id);
    const muebleSnap = await getDoc (movieRef);
  
    return { ...muebleSnap.data(), id: muebleSnap.id };

  }