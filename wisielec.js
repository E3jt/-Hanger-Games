const array = document.querySelectorAll(".key");
const hasla = ["rafał cwaniak","Dżejkok Wojtaszek","Artur lubi koty","kocham fortnajt","Dawid jasper nie ma jedynek","snajperkoza","Rust to najlepsza gra"];
var haslo = hasla[Math.floor(Math.random()*hasla.length)];
haslo = haslo.toUpperCase();
const arrayPassword = Array.from(haslo);
var guess = [];
var chance = 0;
var right = 0;
var left = 9;
const alphabet = "qwertyuiopasdfghjklzxcvbnm";

document.getElementById("guessesTotal").innerHTML = chance+right;
document.getElementById("guessesLeft").innerHTML = left;
document.getElementById("correctGuesses").innerHTML = right;

function unique(str){
     let uniq = "";
     Array.from(str).forEach(element => {
          if(!(uniq.includes(element)) && element !=" ") uniq+= element;
     });
     return(uniq);
};

arrayPassword.forEach(element => {
     if(element != " "){
          guess.push(" _ ");
     }else{
          guess.push("\xa0\xa0\xa0");
     };
});
document.getElementById("result").innerHTML = guess.join('');

array.forEach(current => {
     current.addEventListener('click' , function handleKeyboardClick(){
          if(!(current.classList.contains("correct") || current.classList.contains("incorrect"))){
               if(chance < 9 && right < unique(haslo).length){
                    if(haslo.includes(current.innerHTML)){
                         var positions = [];
                         var iterator = 0;
                         current.classList.add("correct");
                         right++;
                         arrayPassword.forEach(element => {
                              if(element == current.innerHTML){
                                   positions.push(iterator);
                              };
                              iterator++;
                         });
                         positions.forEach(element => {
                              guess[element] = arrayPassword[element]; 
                         });
                         var p = document.createElement("p")
                         p.className = "correctGuess";
                         p.innerHTML = current.innerHTML;
                         document.getElementById("history").appendChild(p);
                    }else{    
                         document.getElementById("leftG").style.backgroundImage = "url(img/s" + chance + ".jpg)";
                         current.classList.add("incorrect");
                         chance++; 
                         left--;
                         var p = document.createElement("p")
                         p.className = "incorrectGuess";
                         p.innerHTML = current.innerHTML;
                         document.getElementById("history").appendChild(p);
                    };
                    document.getElementById("result").innerHTML = guess.join('');
               };
          };
          document.getElementById("guessesTotal").innerHTML = chance+right;
          document.getElementById("guessesLeft").innerHTML = left;
          document.getElementById("correctGuesses").innerHTML = right;
          if(chance == 9){
               document.getElementById("result").innerHTML = "Przegrałeś !!! Hasłem było : " + haslo;
          };
          if(right == unique(haslo).length){
               document.getElementById("result").innerHTML = "Wygrałeś !!! Hasłem było : " + haslo ;
          }
     });
});

document.addEventListener("keypress", (key) =>{
     if(alphabet.includes(key.key)){
          if(chance < 9 && right < unique(haslo).length && !(document.getElementById(key.key.toUpperCase()).classList.contains("incorrect")) && !(document.getElementById(key.key.toUpperCase()).classList.contains("correct"))){
               if(haslo.includes(key.key.toUpperCase())){
                    var positions = [];
                    var iterator = 0;
                    document.getElementById(key.key.toUpperCase()).classList.add("correct");
                    right++;
                    arrayPassword.forEach(element => {
                         if(element == key.key.toUpperCase()rrr){
                              positions.push(iterator);
                         };
                         iterator++;
                    });
                    positions.forEach(element => {
                         guess[element] = arrayPassword[element]; 
                    });
                    var p = document.createElement("p")
                    p.className = "correctGuess";
                    p.innerHTML = key.key.toUpperCase();
                    document.getElementById("history").appendChild(p);
                    console.log("Git trafienie");
               }else{    
                    document.getElementById("leftG").style.backgroundImage = "url(img/s" + chance + ".jpg)";
                    document.getElementById(key.key.toUpperCase()).classList.add("incorrect");
                    chance++; 
                    left--;
                    var p = document.createElement("p")
                    p.className = "incorrectGuess";
                    p.innerHTML = key.key.toUpperCase();
                    document.getElementById("history").appendChild(p);
               };
               document.getElementById("result").innerHTML = guess.join('');
          };
     };
          document.getElementById("guessesTotal").innerHTML = chance+right;
          document.getElementById("guessesLeft").innerHTML = left;
          document.getElementById("correctGuesses").innerHTML = right;
          if(chance == 9){
               document.getElementById("result").innerHTML = "Przegrałeś !!! Hasłem było : " + haslo;
          };
          if(right == unique(haslo).length){
               document.getElementById("result").innerHTML = "Wygrałeś !!! Hasłem było : " + haslo ;
          };
});