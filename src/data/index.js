import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,
         doc,
         getDoc, 
         setDoc, 
         query, 
         where, 
         addDoc,
         collection, 
         getDocs,
        Timestamp,} from 'firebase/firestore/lite';

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
  
    const mueblesSnap = await getDocs(queryMueble);
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

export async function dataToFirebase() {
  const PRODUCTS = [
    {
        "id": 1,
        "imgUrl": "https://www.miahomecorner.com/data/productos/d_mesa-tema-extensible-1.jpg",
        "title": "Mesa Familar",
        "categoria":"Industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor. Medidas",
        "price":"$4.53",
        "stock": 13,
    },
    {
        "id":2,
        "imgUrl": "https://silloneseuropa.com.ar/wp-content/uploads/2020/06/sam-1.jpg",
        "title":"Sofa 3 cuerpos",
        "categoria":"Living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 cuerpos hecho a base de pluma",
        "price":"$0.12",
        "stock": 23,
    },
    {
        "id": 3,
        "imgUrl": "https://www.puertoliving.com.ar/wp-content/uploads/2017/10/ratona-paraiso-base-hierro.jpg",
        "title": "Mesa",
        "categoria":"Industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"$4.53",
        "stock": 3,
    },
    {
        "id":4,
        "title":"Sofa 3 cuerpos",
        "categoria":"Living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 cuerpos hecho a base de pluma",
        "price":"$0.12",
        "stock": 8,
    },
    {
        "id": 5,
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7bULBLeUgdHjaH-qjRXqr0VSvWJcchVZWA&usqp=CAU",
        "title": "Mesa",
        "categoria":"Industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"$4.53",
        "stock": 21,
    },
    {
        "id":6,
        "title":"Sofa 3 cuerpos",
        "categoria":"Living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 cuerpos hecho a base de pluma",
        "price":"$0.12",
        "stock": 6,
    },
    {
        "id": 7,
        "imgUrl": "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/367286_mesaindustrialclarabaseblanca150x90.jpg",
        "title": "Mesa",
        "categoria":"Industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"$4.53",
        "stock": 14,
    },
    {
        "id":8,
        "title":"Sofa 3 cuerpos",
        "categoria":"Living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 cuerpos hecho a base de pluma",
        "price":"$0.12",
        "stock": 61,
    },
    {
        "id": 9,
        "imgUrl": "https://www.deestiloindustrial.com/wp-content/uploads/2018/09/61PJZRBP3NL._SL1200_.jpg",
        "title": "Mesa ",
        "categoria":"Industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"$4.53",
        "stock": 20,
    },
    {
        "id":10,
        "title":"Sofa 3 cuerpos",
        "categoria":"Living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 cuerpos hecho a base de pluma",
        "price":"$0.12",
        "stock": 29,
    }
    
    ];

  const miColeccion = collection(firestoreDB, 'muebles');

  PRODUCTS.forEach((item) => {
    const newDoc = doc(miColeccion);
    setDoc(newDoc, doc.item)
    .then(() => {
      console.log("Document Written with id: ", newDoc.id);
    })
    .catch((err) => {
      console.error("Error adding document: ", err);
    });
  });
}

export async function createBuyOrder(orderData){
  const buyTimestamp = Timestamp.now();

  const orderWithDate = {
                          ...orderData, 
                          date: buyTimestamp
                        }
  const miColec = collection(firestoreDB, "buyOrders");
  const orderDoc = await addDoc(miColec, orderWithDate);

  
  console.log("Orden Lista con el ID:", orderDoc.id);
  console.log("Order Lista con el Data:", OrderDoc.data());
}