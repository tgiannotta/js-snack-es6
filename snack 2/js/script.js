/* Snack2
---------------------------------------------------------------------------------------
 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
     Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. */

const campionatoItaliano = [
    {
        nome: 'Atalanta',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Udinese',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Venezia',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Spezia',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Sampdoria',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Torino',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Salernitana',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Genoa',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Empoli',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Verona',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Cagliari',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Bologna',
        punti: 0,
        falli: 0,
    }
]




/* Prima di tutto creiamo una funzione che  genererà i numeri random */


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/* Generare numeri random al posto degli 0 nelle proprietà Punti fatti e falli subiti. 
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
  let newCampionato = []

for(let i = 0; i < campionatoItaliano.length; i++){
    thisTeam = campionatoItaliano[i]
    thisTeam.punti = getRndInteger(12, 30);
    thisTeam.falli = getRndInteger(0, 30)
    newCampionato.push(thisTeam.nome, thisTeam.falli)


}
console.log(newCampionato);














