let input = prompt("What Would You Like To Do?");

const todos = [];

while(input !== 'quit' && input !== 'q'){
    if(input=== ' list'){
        console.log('************');
        for(let i = 0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('************');
    }else if (input=== 'new'){
        const newTodo = prompt("OK, What is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo}: added to the list`)
    }else if(input=== ' delete'){
        const index = parseInt( prompt(" OKEY, What is the index to delete: "));
        if(!Number.Nan(index)){
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]}: removed from the list`)
        }else{
            console.log('Unknown index');
        }
    }
    prompt("What Would You Like To Do?");
}
console.log("OK,you quite the app")