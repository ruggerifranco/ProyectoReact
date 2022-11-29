import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

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
  console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {
  try { 
    const docRef = doc(DB, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("El producto no existe");
    }
  }
  catch(error){
    throw error;
  }
}

// async/await -> try/catch
export async function getItemsFromAPI() {
  try {
    // 1. Necesito conectarme a la colección de "productos" con "collection"
    const collectionProducts = collection(DB, "products");

    // 2. Necesito traer todos los documentos existentes con getDocs
    let respuesta = await getDocs(collectionProducts);

    // 3. Extramos la data de nuestros productos y la mapeamos con "map"
    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });

    // 4. Retornamos el listado de productos mapeado
    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));

  const productsSnap = await getDocs(myQuery);

  const emptyArray = productsSnap.docs.length < 1;

  if (emptyArray) throw new Error("Categoría sin resultados");

  const products = productsSnap.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });

  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);

  return docRef.id;
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductsRef = collection(DB, "products");
  const collectionOrdersRef = collection(DB, "buyorders");
  const batch = writeBatch(DB);

  let arrayIds = buyOrderData.items.map((item) => {
    return item.id;
  });

  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

  let productsSnapshot = await getDocs(q);

  productsSnapshot.docs.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
    let stockActualizado = stockActual - itemInCart.count;

    batch.update(doc.ref, { stock: stockActualizado });
  });

  const docOrderRef = doc(collectionOrdersRef);
  batch.set(docOrderRef, buyOrderData);

  batch.commit();

  return docOrderRef.id;
}

// export async function exportItemsToFirestore() {
//     const items = [
//         {
//             id: 1,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/piñata-mike.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 2,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-arcoiris.jpeg",
//             stock: 10,
//             discount: 15,
//             category: "piñatas",
//         },
    
//         {
//             id: 3,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-batman.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 4,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-bobConstructor.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 5,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-bobEsponja.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 6,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-Cangrejo.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 7,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-CaraMinie.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 8,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-corazonRojo.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 9,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-dinosaurio.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 10,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-dinosaurioVioleta.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 11,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-emojiCaraFeliz.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 12,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-flor.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 13,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-gato.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 14,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-mariposa.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 15,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-miniGrande.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 16,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-minion.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 17,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-numero1.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 18,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-numero3Shrek.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 19,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-patricio.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 20,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-perro.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 21,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-robot.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 22,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-Robot2.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 23,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-sirena.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 24,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-duo.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 25,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-leopardo.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 26,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-dragon.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 27,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-perra.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 28,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-oso.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 29,
//             title: "PIÑATA",
//             description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 3500,
//             thumbnail: "/img copy/Piñata-perroAzul.jpeg",
//             stock: 10,
//             category: "piñatas",
//         },
    
//         {
//             id: 30,
//             title: "Bolsitas De Colores",
//             description: "Las Bolsitas son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 1500,
//             thumbnail: "/img copy/BolsitasColores.jpeg",
//             stock: 10,
//             category: "bolsitas",
//         },
    
//         {
//             id: 31,
//             title: "Bolsitas De Mikey",
//             description: "Las Bolsitas son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 1500,
//             thumbnail: "/img copy/BolsitasMikey.jpeg",
//             stock: 10,
//             category: "bolsitas",
//         },
    
        
//         {
//             id: 32,
//             title: "Bolsitas Huellas De Perro",
//             description: "Las Bolsitas son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 1500,
//             thumbnail: "/img copy/BolsitasPatitas.jpeg",
//             stock: 10,
//             category: "bolsitas",
//         },
    
//         {
//             id: 33,
//             title: "Bolsitas Robot's",
//             description: "Las Bolsitas son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 1500,
//             thumbnail: "/img copy/BolsitasRobot.jpeg",
//             stock: 10,
//             category: "bolsitas",
//         },
    
//         {
//             id: 34,
//             title: "Centro De Mesa Flores",
//             description: "Los centro de mesas son hechos especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2000,
//             thumbnail: "/img copy/CentroDeMesaFlores.jpeg",
//             stock: 10,
//             category: "centro de mesa",
//         },
    
//         {
//             id: 35,
//             title: "Centro De Mesa Mario",
//             description: "Los centro de mesas son hechos especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2000,
//             thumbnail: "/img copy/CentroDeMesaMario.jpeg",
//             stock: 10,
//             category: "centro de mesa",
//         },
    
//         {
//             id: 36,
//             title: "Centro De Mesa Cumple 5",
//             description: "Los centro de mesas son hechos especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2000,
//             thumbnail: "/img copy/CentroDeMesaMel.jpeg",
//             stock: 10,
//             category: "centro de mesa",
//         },
    
//         {
//             id: 37,
//             title: "Guirnalda De Boca",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaBoca.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 38,
//             title: "Guirnalda Cobra Kai",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaCobraKai.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
        
//         {
//             id: 39,
//             title: "Guirnalda Cumpleaños",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaFelizCumple.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 40,
//             title: "Guirnalda Gatitas",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaGatita.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 41,
//             title: "Guirnalda Globos",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaGlobos.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 42,
//             title: "Guirnalda Inicial",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaM.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 43,
//             title: "Guirnalda Mamá",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaMama.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 44,
//             title: "Guirnalda Mariposa",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaMariposa.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 45,
//             title: "Guirnalda Pelota",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaPelota.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         },
    
//         {
//             id: 46,
//             title: "Guirnalda Shrek",
//             description: "Las guirnaldas son hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
//             price: 2500,
//             thumbnail: "/img copy/GuirnaldaShrek.jpeg",
//             stock: 10,
//             category: "guirnaldas",
//         }, 
    
//     ]

//   const collectionRef = collection(DB, "products");

//   /* for of */
//   for (let item of items) {
//     item.index = item.id;
//     delete item.id;
//     const docRef = await addDoc(collectionRef, item);
//     console.log("Document created with ID", docRef.id);
//   }
// }
