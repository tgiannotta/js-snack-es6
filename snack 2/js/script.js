/* Snack 1
 ------------------------------------------------------------------------------
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. */

const elencoBici = [
    {
        nome: 'Bici da città',
        peso: 15
    },
    {
        nome: 'Mountain bike',
        peso: 14.5,
    },
    {
        nome: 'Bici da corsa',
        peso: 6.5,
    },
    {
        nome: 'Bici da cicloturismo',
        peso: 14,
    },
    {
        nome: 'Bici ibrida',
        peso: 15.4,
    },
    {
        nome: 'Bici a scatto fisso',
        peso: 15.3,
    },
    {
        nome: 'Bici pieghevole',
        peso: 12,
    },
    {
        nome: 'Bici da ciclocross',
        peso: 12.4,
    },
    {
        nome: 'Gravel bike',
        peso: 10.5
    },
    {
        nome: 'Fat bike',
        peso: 15.6
    },
    {
        nome: 'Downhill',
        peso: 18
    },
    {
        nome: 'Bmx',
        peso: 9.5
    },
    {
        nome: 'Bici per bambini',
        peso: 10.2
    },
    {
        nome: 'Bici senza pedali',
        peso: 7
    },
    {
        nome: 'Bici elettrica',
        peso: 21
    },
    {
        nome: 'Minibici',
        peso: 16.3
    },
    {
        nome: 'Cargo bike',
        peso: 30.7
    },
    {
        nome: 'Bici reclinata',
        peso: 13
    },
    {
        nome: 'Tandem',
        peso: 20
    },
    
]


/* Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM */

/* Stampiamo prima tutte le biciclette e il loro peso */
let elencoBiciHTML = document.getElementById('bici-container')
let pesoBikeDefault = elencoBici[0]


for(let i = 0; i < elencoBici.length; i++){
    thisBike = elencoBici[i]
    
    let singlebikeHTML = `
    <ul>
          <li>${thisBike.nome} Di peso: ${thisBike.peso}kg</li>
      </ul>
    `
    elencoBiciHTML.innerHTML += singlebikeHTML


    if(thisBike.peso < pesoBikeDefault.peso){
      pesoBikeDefault = thisBike;
    }
   
    
}
/* Stampiamo infine la bici PictureInPictureWindow piccola */
let biciMinoreHTML = document.getElementById('bici-minore')
let biciPiccolaHTML = `
<h4>La bici che pesa di meno è: ${pesoBikeDefault.nome}</h4>

`
biciMinoreHTML.innerHTML = biciPiccolaHTML



