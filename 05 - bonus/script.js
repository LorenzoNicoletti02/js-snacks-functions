/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
function getCurrentTime(name) {
    const time = new Date();
    let saluto = ("");

    if (time.getHours() <= 13) {
        saluto = `Buongiorno ${name}`;

    } else if (time.getHours() <= 17) {
        saluto = `Buon pomeriggio ${name}`;

    } else if (time.getHours() >= 17) {
        saluto = `Buonasera ${name}`;
    }
    
    return saluto;
}
// Invoca la funzione qui e stampa il risultato in console
getCurrentTime(name);
console.log(getCurrentTime(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.