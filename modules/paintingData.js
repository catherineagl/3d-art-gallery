/* export const paintingData = [
  // Front Wall
  {
    imgSrc: `arte/1.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * 0, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Aquí podemos observar una obra maestra llena de gracia y elegancia.`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/2.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * 1, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Mi ex familia, la perfección plasmada en una foto`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/3.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * 2, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Esa sonrisa, esa carita que me mata 😍`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/4.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * 3, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Colegiala caliente 🥵.`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },

  // back wall
  {
    imgSrc: `arte/5.jpg`,
    width: 4,
    height: 5,
    position: { x: -15 + 10 * 4, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Mujer mas perfecta? No hay.`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/6.jpg`,
    width: 4,
    height: 5,
    position: { x: -15 + 10 * 5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Diva, regia, inalcanzable.`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/7.jpg`,
    width: 4,
    height: 5,
    position: { x: -15 + 10 * 6, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Esa caritaaa, esos gestos de niña malcriada, me encanta 😫.`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/8.jpg`,
    width: 4,
    height: 5,
    position: { x: -15 + 10 * 7, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Esos ojitos hermosos.`,
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },

  //left wall
  {
    imgSrc: `arte/9.jpg`,
    width: 4,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * 9 },
    rotationY: Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Si, así de preciosa va esa niña a trabajar.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/18.jpg`,
    width: 4,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * 10 },
    rotationY: Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Mención especial para mis niños, estarán por siempre en mi corazón.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/11.jpg`,
    width: 4,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * 11 },
    rotationY: Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Nada que decir, una obra de arte.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/12.jpg`,
    width: 4,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * 12 },
    rotationY: Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Ese flow mi amor.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },

  // right wall
  {
    imgSrc: `arte/13.jpg`,
    width: 4,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * 13 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Llegué de la balberia.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/14.jpg`,
    width: 4,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * 14 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Mi foto favorita por mucho, mujer mas perfecta que esta no hay en el mundo.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/16.jpg`,
    width: 4,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * 15 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Mi segunda foto favorita, porque están cuchis mis dos bebés.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  },
  {
    imgSrc: `arte/17.jpg`,
    width: 4,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * 15 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: `Uno de los tantos días en los que terminamos y me enviaba fotos toda seria, y tan hermosa que se ve así.`,
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  }



]; */

const descriptions = [
  "Aquí podemos observar una obra maestra llena de gracia y elegancia.",
  "Mi ex familia, la perfección plasmada en una foto",
  "Esa sonrisa, esa carita que me mata 😍",
  "Colegiala caliente 🥵.",
  "Mujer mas perfecta? No hay.",
  "Diva, regia, inalcanzable.",
  "Esa caritaaa, esos gestos de niña malcriada, me encanta 😫.",
  "Esos ojitos hermosos.",
  "Si, así de preciosa va esa niña a trabajar.",
  "Mención especial para mis niños, estarán por siempre en mi corazón.",
  "Nada que decir, una obra de arte.",
  "Ese flow mi amor.",
  "Llegué de la balberia.",
  "Mi foto favorita por mucho, mujer mas perfecta que esta no hay en el mundo.",
  "Mi segunda foto favorita, porque están cuchis mis dos bebés.",
  "Uno de los tantos días en los que terminamos y me enviaba fotos toda seria, y tan hermosa que se ve así."
]

export const paintingData = [
...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `arte/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i],
      year: `2024`,
      link: "https://github.com/theringsofsaturn",
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `arte/${i + 5}.jpg`,
    width: 4,
    height: 5,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i+4],
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `arte/${i + 9}.jpg`,
    width: 4,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i+8],
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `arte/${i + 13}.jpg`,
    width: 4,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i+12],
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
    })),
]


