function sing(){
    console.log('do')
    console.log('re')
    console.log('MI')
}

function greet(firstName, lastName){
    console.log(`hey there  ${firstName} !!! ${lastName[0]}.`.toUpperCase());
}


function repeat(text, time){
    let result='';
    for(let i =0; i<time; i++){
    result +=text;
    }
console.log(result)
}
