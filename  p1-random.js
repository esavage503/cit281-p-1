/*
    CIT 281 Project 1
    Name: Eli Savage
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    let result = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < Math.floor(Math.random() * (max - min) + min); i++){
        
       result += letters.charAt(Math.random()*letters.length);

    }
    
    console.log(result);
    return result
}

getRandomInteger(5,26);
