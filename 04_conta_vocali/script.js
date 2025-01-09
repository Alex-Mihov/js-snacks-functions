/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocaliParola(word) {
    // creo una costante che contiene tutte le vocali
    const vocali = ["a", "e", "i", "o", "u"];

    // uso split per dividere la parola e con includes controllo le lettere se le vocali sono presenti
    return word.split("").filter(lettere => vocali.includes(lettere)).length;

}

const vocaliWord = vocaliParola(word);
// Invoca la funzione qui e stampa il risultato in console

console.log(vocaliWord)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)