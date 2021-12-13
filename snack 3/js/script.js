/* Snack 1
dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara']

const min = 0;

const max = 2;
/* 
Con filter */
let rangeArray = myArray.filter((element, index, array) => {
    
    
    if(index >= min && index <= max){
        return element
    }
})

/* 
con foreach */
const newArray = []
myArray.forEach((element, index, array) => {
    if(index >= min && index <= max ){
        newArray.push(element)
    }
})
console.log(newArray);