import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDmLXHSNJfACXeXUez6mBfKMSM8-dkZE04",
    authDomain: "alegrarte34785.firebaseapp.com",
    projectId: "alegrarte34785",
    storageBucket: "alegrarte34785.appspot.com",
    messagingSenderId: "472231065935",
    appId: "1:472231065935:web:0aab0c837799616edded3a"
};


const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export function testDatabase() {
    console.log(FirebaseApp)
}

export async function getSingleItemFromAPI(id){
    const docRef = doc(DB, "products", id)
    const docSnap = await getDoc(docRef)
    
    if(docSnap.exists()){

        return {
            ...docSnap.data(),
            id: docSnap.id,
        }

    } else {
        console.error("El producto no existe")
    }
}

export async function getItemsFromAPI() {
    try {
        const collectionProducts = collection(DB, "products")

        let respuesta = await getDocs(collectionProducts)

        const products = respuesta.docs.map(docu => {
            return {
                ...docu.data(),
                id: docu.id,
            }
        })

        return products
    }
    catch (error) {
        console.error(error)
    }
}

export async function getItemsFromAPIByCategory(categoryId) {
    const productsRef = collection(DB, "products")
    const myQuery = query (productsRef, where("category", "==", categoryId))

    const productsSnap = await getDocs(myQuery)

        const products = productsSnap.docs.map(docu => {
            return {
                ...docu.data(),
                id: docu.id,
            }
        })
        return products
}