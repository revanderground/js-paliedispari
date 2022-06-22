const string = prompt("Inserisci una parola")
let reverseString= turnString(string);

console.log(`La tua parola: ${string}`);
console.log(`Parola invertita: ${reverseString}`);

if(string == reverseString){
    console.log('la parola è PALINDROMA');
  } else {
    console.log('la parola NON È PALINDROMA');
}

function turnString(word){
  let reverseString = '';

  let i = word.length - 1;

  while (i >= 0) {
    reverseString += word[i];
    i--;
  }

  return reverseString;
}

const userChoice=prompt("Scegli pari o dispari");


if (userChoice=="pari"  || userChoice == "dispari") {  
    console.log(`Hai scelto ${userChoice}`);
    

    for (let i=0; i <1; i++){
        const userNumber=parseInt(prompt("Scegli un numero da 1 a 5"));
        if ((userNumber > 0) && (userNumber<6)){

        console.log (`Numero scelto: ${userNumber}`);
        
        const aiNumber = random();
    
        
        let sum = aiNumber + userNumber;
        console.log(`la Somma = ${sum}`);
    
    
        let evenOrOdd = whatSum(sum);
    
        if (evenOrOdd==userChoice){
            console.log("Hai vinto!!!")
        } else {
            console.log("Hai perso!!!")
        }
            
        } else {
            console.log('input non valido');
        }

    } 

}  else {
    console.log('input non valido');
}


function random(){      
    let number=Math.floor(Math.random() * 5) + 1;
    console.log(`Numero random= ${number}`);
    return number;
}    


function whatSum(sum){
    let result;
    if (sum % 2 ==0){
        result = "pari";
        console.log(`la somma è ${result}`);        
    } else {
        result = "dispari";
        console.log(`la somma è ${result}`);
    }
    return result;
}
