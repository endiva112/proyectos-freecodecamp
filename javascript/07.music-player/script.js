const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],//El "spread orperator (...)", permite copiar todos los elementos de un array en otro o para concatenar varios arrays en uno solo
  currentSong: null,
  songCurrentTime: 0,
};

/* TEORIA A CERCA DE LAS arrow functions
//En los proyectos anteriores solo he usado funciones, pero a partir de ahora usare "arrow functions", funciones sin nombre esta es la sintaxis: () => {}
const printGreeting = () => {
  console.log('Hello there!'); 
}

//Las arrow functions se suele vincular a un identificador y se llaman haciendo mención a este identificador
//sigo sin entender bien la razón del por que querrías hacer esto, lo iré descubiendo poco a poco supongo.
printGreeting();


Si la función tiene solo un parámetro se pueden omitir los corchetes
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

lo de arriba se convierte en lo de abajo, ambos funcionan

const greet = name => {
  console.log(`Hello, ${name}!`);
};


const printMessage = org => {
  console.log(`${org} is awesome!`)
}
printMessage('freeCodeCamp');

//Igual que las funciones normales las "arrow functions" también pueden retornar valores
//Y además, si retorna una expresión simple, se puede omitir el return y los {}, esto es llamado un 'retorno implicito'
//ejempo: const multiplyTwoNumbers = (num1, num2) => num1 * num2;

//Si la función tiene varias lineas de código entonces no se puede omitir

Ejemplo:
const getTax = (price) => {
  const taxRate = 0.08;
  const tax = price * taxRate;
  return tax;
};

//Más arriba tenemos esta misma función, pero esta es su forma de función con 'retorno implicito', no me gusta mucho.
const addTwoNumbers = (num1, num2) => num1 + num2;
*/

const renderSongs = (array) => {

};