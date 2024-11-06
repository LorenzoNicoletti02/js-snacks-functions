/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {Array} namesArray
 * @param {string} letters
 * @returns {Array}
 */

function chooseByLetter(namesArray, letters) {
    const result = []; // Array delle iniziali
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i][0] === letters) {
            result.push(namesArray[i]);
        }
    }
    return result;
}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
const result = chooseByLetter(names, "L");
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]