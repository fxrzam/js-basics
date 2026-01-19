const nummbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


const [first,second,third, ...everything] = results;

//first 1
//second 2
//third 3
// ...everything everything after 3 will be there

function print(element){
    console.log(element);
}

nummbers.forEach(function(el) {
console.log(el)
}); //passes all the numbers in the array to the function print this is just basically for printing for of is better here but for of wasnt always a thing as seen below
// for(el of numbers){
//     console.log(el);
// }



// nummbers.forEach(function(el) {
//     if(el % 2 == 0){
//         console.log(el)
//     }
// });


//this is a more realist use of it prits all of them  below:

const movies = [

    {
        title: 'spiderman',
        score: 3
    },

        {
        title: 'Batman',
        score: 5
    },

        {
        title: 'superman',
        score: 4
    },
]

movies.forEach(function(movie){
    console.log(` ${title}: ${ score}/100`)
});


//we can also use this aswell 


// movies.forEach((movie) => {
//     console.log(`${movie.title}: ${movie.score}/100`);
// });


// movies.forEach((movies)=>  console.log(`${movie.title}: ${movie.score}/100`)); //if its a one liner and also has one thing to do u can use this but of u wqnt to put it into twho liners u should use ()

movies.forEach((movies) =>  
    (console.log(`${movie.title}: ${movie.score}/100`)));


