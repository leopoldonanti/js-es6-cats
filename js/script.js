
/* Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */

$(document).ready(function(){

  /* inserisco i dati del mio array di oggetti */

  const gatti = [
    {
      nome: 'UFO',
      eta: 0.8,
      colore: '#FD7606',
      genere: 'maschio'
    },

    {
      nome: 'Romeo',
      eta: 9,
      colore: '#FDD206',
      genere: 'maschio'
    },

    {
      nome: 'Mordicchio',
      eta: 7.5,
      colore: '#363843',
      genere: 'maschio'
    },

    {
      nome: 'Selegramor',
      eta: 12,
      colore: '#8CA2FF',
      genere: 'maschio'
    },

    {
      nome: 'Kleo',
      eta: 2,
      colore: '#9EA5C4',
      genere: 'femmina'
    },

  ];

/* -------------------------------------------------------------------------- */
  
  /* con il comando "for each" stampo a pagina tutti i gatti */
   gatti.forEach((cat)=>{
    $("#kitten-box ul").append(listGenerator(cat.colore,cat.nome));

    /* aggiungo le proprietà per il fiocco - ribbon */
    const blue = "4C92FF";
    const pink = "FF95BA";
    const nuoviGatti = gatti.map((cat) => {
      
      /* per questa condizione utilizzo l'operatore ternario */
      //var            (   condizione   )     ?se è vero  :se è falso
      let color = (cat.genere == "femmina") ? pink : blue;
      let opacity = cat.eta / 10;
      return{
        ...cat,
        ribbon:{
          color,
          opacity
        }
      }
    }); /* fine dell'operatore map */

/* -------------------------------------------------------------------------- */

    /* filtro l'array in base alla proprietà di genere maschile o femminile */
    /* se è vero che il gatto è femmina pushamelo dentro l'array gattiFem */
  const gattiFem = nuoviGatti.filter((cat) => cat.genere === "femmina");

  const gattiMale = nuoviGatti.filter((cat) => cat.genere === "maschio");

  gattiFem.forEach((cat) => {
    $("#kitten-box-female ul").append(listGenerator(cat.colore, cat.nome, cat.ribbon.color, cat.ribbon.opacity));

   });
   


   

});/* fine document ready */ 


function listGenerator(catColor, name, ...ribbon){
  
  /* let ribbonTag = ""
  if(ribbon.length > 0){
    ribbonTag = `<i class="fas fa-ribbon"
                            style="color:${ribbon[0]};
                            opacity:${ribbon[1]}></i>`
  } */
  let html = `
  <li>
    <i class="fas fa-cat" style="color:${catColor}" ></i>
    ${ribbonTag}
    <span>${name}</span>
  </li>
  ` ;
  return html; 
}