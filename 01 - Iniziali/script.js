/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo 
 array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const firstCharArray = [];


// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {string} word
 * @returns {string}
 */

function char(word) {
    const curChar = word[0];
    return curChar
}

for (let i = 0; i < names.length; i++) {
    const curName = names[i];
    firstCharArray.push(char(curName));
}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(firstCharArray);
