

let passoneEl = document.getElementById("passone-el");
let passtwoEl = document.getElementById("passtwo-el");
let passthreeEl = document.getElementById("passthree-el");
let passfourEl = document.getElementById("passfour-el");

let passLength = 0;


function start(){

    let lengthEl = document.getElementById("length-el").value;

    if (lengthEl > 7 && lengthEl < 17){
        passLength = lengthEl;
        getPassword();
    }
    else
    {
       return alert("Enter a number between 8 and 16");
    }
}



function getPassword() {


let chars = [];
let passwordOne = "";
let passwordTwo = "";
let passwordThree = "";
let passwordFour = "";

    
    for(let i = 33; i <= 126; i++){
        chars.push(String.fromCharCode(i));
        }
    
    for (let b = 1; b <= 4; b++){
        if (b === 1){
            for(let j = 0; j < passLength; j++) {
                passwordOne += chars[Math.floor(Math.random() * chars.length)];
              }
              
        }else if (b === 2){
            for(let j = 0; j < passLength; j++) {
                passwordTwo += chars[Math.floor(Math.random() * chars.length)];
              }
             
        }else if (b === 3){
            for(let j = 0; j < passLength; j++) {
                passwordThree += chars[Math.floor(Math.random() * chars.length)];
              }
             
        }else {
            for(let j = 0; j < passLength; j++) {
                passwordFour += chars[Math.floor(Math.random() * chars.length)];
              }
              
        }


    }    
    passoneEl.value = passwordOne;
    passtwoEl.value = passwordTwo;
    passthreeEl.value = passwordThree;
    passfourEl.value = passwordFour;
    
     
     console.log(passwordOne);
     console.log(passwordTwo);
     console.log(passwordThree);
     console.log(passwordFour);
     
     
     
     
} 

