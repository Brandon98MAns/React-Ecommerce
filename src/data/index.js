import { initializeApp } from "firebase/app";
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
  apiKey: "AIzaSyC_eoxVQb0PplHuu_NIpWrnbA4UupO39-M",
  authDomain: "reactliving-756bd.firebaseapp.com",
  projectId: "reactliving-756bd",
  storageBucket: "reactliving-756bd.appspot.com",
  messagingSenderId: "524828840093",
  appId: "1:524828840093:web:6d70b7fe42a02102c90474"
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
    categoryId = categoryId.toLowerCase();
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
    const miColec = collection(firestoreDB, "muebles");
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
        "categoria":"industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor. Medidas 210x100 cm.",
        "price":"54.000",
        "stock": 13,
    },
    {
        "id":2,
        "imgUrl": "https://silloneseuropa.com.ar/wp-content/uploads/2020/06/sam-1.jpg",
        "title":"Sofa 3 Cuerpos",
        "categoria":"living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 Cuerpos hecho a base de pluma",
        "price":"89.000",
        "stock": 23,
    },
    {
        "id": 3,
        "imgUrl": "https://www.puertoliving.com.ar/wp-content/uploads/2017/10/ratona-paraiso-base-hierro.jpg",
        "title": "Mesa Ratona",
        "categoria":"industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para tu living.",
        "price":"37.540",
        "stock": 3,
    },
    {
        "id":4,
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_739029-MLA48822184230_012022-F.jpg",
        "title":"Sofa 2 Cuerpos",
        "categoria":"living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 Cuerpos hecho a base de pluma",
        "price":"124.000",
        "stock": 8,
    },
    {
        "id": 5,
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_657224-MLA49901291924_052022-F.jpg",
        "title": "Rack TV",
        "categoria":"industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"68.700",
        "stock": 21,
    },
    {
        "id":6,
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_814304-MLA46092556931_052021-F.jpg",
        "title":"Sillon Individual",
        "categoria":"living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 Cuerpos hecho a base de pluma",
        "price":"42.300",
        "stock": 6,
    },
    {
        "id": 7,
        "imgUrl": "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/367286_mesaindustrialclarabaseblanca150x90.jpg",
        "title": "Escritorio Eucalipto",
        "categoria":"industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"46.250",
        "stock": 14,
    },
    {
        "id":8,
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_817044-MLA40818714282_022020-F.jpg",
        "title":"Sofa Escandinavo Chenille",
        "categoria":"living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 Cuerpos hecho a base de pluma",
        "price":"58.600",
        "stock": 61,
    },
    {
        "id": 9,
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_928732-MLA50032547798_052022-F.jpg",
        "title": "Combo 2 Mesas De Luz",
        "categoria":"industrial",
        "material": "Hierro y Madera",
        "descripcion":"Mesa de hierro y madera para comedor.",
        "price":"78.500",
        "stock": 20,
    },
    {
        "id":10,
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_806220-MLA40863182115_022020-F.jpg",
        "title":"Sofa Rinconero 3 Cuerpos",
        "categoria":"living",
        "material":"Pluma y algodon",
        "descripcion":"Sofa de 3 Cuerpos hecho a base de pluma",
        "price":"96.750",
        "stock": 29,
    }
    
    ];

  const miColeccion = collection(firestoreDB, "muebles");

  PRODUCTS.forEach((item) => {
    const newDoc = doc(miColeccion);
    setDoc(newDoc, item)
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

  return( orderDoc.id) ;
}

