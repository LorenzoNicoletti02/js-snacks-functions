/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {string} name
 * @returns {string}
 */

function helloName(name) {
    if (isNaN(name)) {
        return "Ciao " + name;
    }
    return "Attenzione non è una stringa"; 
}


// Invoca la funzione qui e stampa il risultato in console
console.log(helloName(name));




//Risultato atteso se si passa 'Mario': // ciao Mario