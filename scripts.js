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