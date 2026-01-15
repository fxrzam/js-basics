const password = prompt("please enter a new password")

if(password.length >=6){
    if(password.indexOf(" ") ===-1 ){
    console.log("valid password")
}else{
    console.log("password cannot contain spaces!")
}
}else(
    console.log("password cannot be less than 6 charecters")
)

