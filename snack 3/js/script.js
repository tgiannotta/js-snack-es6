/* Snack 1
dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara']

const min = 0;

const max = 2;


let rangeArray = myArray.filter((element, index, array) => {
    
    
    if(index >= min && index <= max){
        return element
    }
})
console.log(rangeArray);