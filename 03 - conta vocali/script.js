/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * Description placeholder
 *
 * @returns {number}
 */

function vocalsCount(parola) {
    const vocals = "aeiou";
    let count = 0;

    for (let i = 0; i < parola.length; i++){
        if (vocals.includes(parola[i])) {
            count++;
        }
    }
    return [count];
}


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vocalsCount(word));
