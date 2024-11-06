/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo 
 array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {string} namesArray
 * @returns {Array}
 */

function firstChar(namesArray) {
    const allInitials = []; // Array delle iniziali
    for (let i = 0; i < names.length; i++) {
        allInitials.push(namesArray[i][0]); // Aggiunge la prima lettera
    }
    return allInitials;
}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
const allInitials = firstChar(names);
console.log(allInitials);
