//Main function declaration
function greetSomeone(hand, callback){
    //Do something
    console.log(`Raising ${hand} hand....`);

    //After doing somenting
    callback(hand ,"Shanking");
}


//Callback function declaration
function handMovement(hand, action){
    //Parameter can be gotten from the main function
    console.log(action + " " + hand + " hand");
}

//Execute main function
greetSomeone("left", handMovement);