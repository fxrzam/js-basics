let maximum = parseInt( prompt("Enter the maximum number"));

while(!maximum){
    maximum = parseInt( prompt("plese enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = prompt("enter your first guess (Type q to quite the game)");
let attempts = 1;

while(parseInt(guess !== targetNum)){
    if(guess === 'q') break;
    guess= parseInt(guess);
    attempts++;
    if(guess > targetNum){
        guess = parseInt (prompt("try smaller number"));
            attempts++;
    }else if(guess < targetNum){
        guess =parseInt( prompt("try bigger number"));
            attempts++;
    }else{
        guess = prompt('invalid number plese enter a valid one, or press "q" to quite' )
    }
}



if(guess === 'q'){
    console.log("OK, Loser...")
}else{
    console.log("CONGRATS YOU WIN");
    console.log(`You've got it, it took you ${attempts} guesses`);

}
