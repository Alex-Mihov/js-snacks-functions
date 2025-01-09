/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocaliParola(parola) {
    // creo una costante che contiene tutte le vocali
    const vocali = ["a", "e", "i", "o", "u"];

    // uso split per dividere la parola e con includes controllo le lettere se le vocali sono presenti
    const vocaliTrovate = parola.split("").filter(lettere => vocali.includes(lettere)).join('');

    return vocaliTrovate.length + " " + vocaliTrovate
}


// Invoca la funzione qui e stampa il risultato in console

console.log(vocaliParola(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)