/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function inizialiNomiLista(names) {
    // utilizzo map per creare un nuovo array applicando la funzione charAt(0) che restituisce il primo elemento di ogni nome 
    return names.map(nome => nome.charAt(0));
}

// creo una costante che abbia come valore la funzione inizialiNomiLista(names)
const iniziali = inizialiNomiLista(names);

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]