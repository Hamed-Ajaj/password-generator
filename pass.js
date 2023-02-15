const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.querySelector(".pass-one")
let pass2 = document.querySelector(".pass-two")
function saveData() {
    var data = document.getElementById("input-el").value;
    return data
}



function getRandomChar1(){
    let randomNum = Math.floor(Math.random()*characters.length)
   let randomChar = characters[randomNum]
   return randomChar
}
function getRandomPass1(){
    let randomPass =""
    for(let i=0;i<16;i++){
        randomPass+=getRandomChar1()
    }
    return randomPass
}
let generatedPass1 = getRandomPass1()
function renderPass(){
    pass1.textContent = generatedPass1
    pass2.textContent = generatedpass2
}


function getRandomChar2(){
    let randomNum = Math.floor(Math.random()*characters.length)
   let randomChar = characters[randomNum]
   return randomChar
}

function getRandomPass2(){
    let randomPass = ""
    for(let i=0;i<16;i++){
        randomPass += getRandomChar2()
    }
    return randomPass
}
let generatedpass2 = getRandomPass2()
