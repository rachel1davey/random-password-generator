const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.getElementById('generatepassword').addEventListener('click', () => {

let passwordlist = [...characters]

const hasNumbers = document.getElementById('numbers').checked
const hasSymbols = document.getElementById('symbols').checked
const passwordLength = parseInt(document.getElementById('passwordlength').value)
const generatedPassword = document.getElementById('generatedpassword')
let password = ""


if (hasNumbers) {
    passwordlist = passwordlist.concat(numbers)
} 

if (hasSymbols) {
    passwordlist = passwordlist.concat(symbols)
}


    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordlist.length) 
        password += passwordlist[randomIndex]
    } 
    generatedPassword.textContent = password
});





// random num math.floor(math.random * 6) + 1

