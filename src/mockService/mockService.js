// BACK END
const itemsDB = [
    {
        id: 1,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/piñata-mike.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 2,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-arcoiris.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 3,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-batman.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 4,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-bobConstructor.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 5,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-bobEsponja.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 6,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-Cangrejo.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 7,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-CaraMinie.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 8,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-corazonRojo.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 9,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-dinosaurio.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 10,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-dinosaurioVioleta.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 11,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-emojiCaraFeliz.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 12,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-flor.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 13,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-gato.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 14,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-mariposa.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 15,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-miniGrande.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 16,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-minion.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 17,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-numero1.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 18,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-numero3Shrek.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 19,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-patricio.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 20,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-perro.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 21,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-robot.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 22,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-Robot2.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 23,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-sirena.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 24,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-duo.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 25,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-leopardo.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 26,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-dragon.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 27,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-perra.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 28,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-oso.jpeg",
        stock: 10,
        category: "Piñatas"
    },

    {
        id: 29,
        title: "PIÑATA",
        description: "Las piñatas son nuestra especialidad, son únicas, hechas especialmente para vos. Elegí tu diseño y tamaño como más te guste, y nosotros lo hacemos realidad. ¡Contanos tu idea y listo!",
        price: 3500,
        thumbnail: "/img copy/Piñata-perroAzul.jpeg",
        stock: 10,
        category: "Piñatas"
    },







    // {
    //     id: 0,
    //     description: "Sabemos que parte de la decoración de tu festejo son las guirnaldas. Podes encargar combos combinados con piñata y rosetas, y mucho más! Para más información contáctate con nosotros.",
    //     price: 2000,
    //     title: "GUIRNALDA",
    //     thumbnail: "/img copy/guirnalda-m.jpeg",
    //     stock: 10,
    //     category: "Guirnaldas"
    // },

    // {
    //     id: 0,
    //     description: "Sumale a tu decoracion rosetas, así será súper completa! Opciones de combos de acuerdo a la temática que más te guste.Contacte con nosotros para ayudarte con más información.",
    //     price: 3000,
    //     title: "ROSETA",
    //     thumbnail: "/img copy/roseta-jirafa.jpeg",
    //     stock: 10,
    //     category: "Rosetas"
    // },

]

export default function getItemsFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsDB);
      }, 500);
    });
  }
  
  export function getSingleItemFromAPI(idParams) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = itemsDB.find((item) => item.id === Number(idParams));
  
        if (itemRequested) {
          resolve(itemRequested);
        } else {
          reject(new Error("El item no existe."));
        }
      }, 500);
    });
  }
  
  export function getItemsFromAPIByCategory(categoryid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let itemsRequested = itemsDB.filter(
          (item) => item.category === categoryid
        );
        resolve(itemsRequested);
      }, 500);
    });
  }
  

