/* Iteración 1 */
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let categoriesArr = [];
for (let movie of movies) {
    console.log(movie.categories);
    movie.categories.forEach( function(element) {
        if (!categoriesArr.includes(element) ) {
            categoriesArr.push(element);
        }
    })
};
console.log(categoriesArr);

console.log('----------------');

/* Iteración 2 */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

let sum = 0;
let result;
let counter = 0;
for (let user of users) {
    for (sound in user.favoritesSounds) {
        let volume = user.favoritesSounds[sound].volume;
        counter ++;
        sum += volume;
    };
    result = sum / counter;
};
console.log(result);

console.log('----------------');

/* Iteracion 3 */

const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

let userSound;
let soundCounter = 0;
let soundsResult = [];
for (let userName of users2) {
    console.log(userName.favoritesSounds);
    for (sound in userName.favoritesSounds) {
        soundsResult.push(sound);
    }
}; 
console.log(soundsResult);

console.log('----------');

/* Iteracion 4 */

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
function findArrayIndex(array, text) {
    let posicionAnimal = array.indexOf(text);
    if (array.includes(text)) {
        console.log(`El animal ${text} está en la posición ${posicionAnimal}`);
    } else {
        console.log(`No tenemos ese animal`);
    }
};

findArrayIndex(animales, 'Mosquito');
findArrayIndex(animales, 'perro');

// Mejora: que acepte animales escribiendo todo en minúsculas

console.log('----------');

/* Iteración 5 */

//Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random();

function rollDice(sidesNumber) {
    return Math.floor(Math.random() * (sidesNumber - 1) + 1);
};

console.log(rollDice(6));









