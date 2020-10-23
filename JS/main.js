// GENERARE 16 NUMERI COMPUTER TRA 1 E 100
// I NUMERI NON POSSONO ESSERE DUPLICATI

// LISTA 16 NUMERI TRA 1 E 100 (BOMBE)

var bombe = [];
var math = generatoreBombe(1,5)
// console.log(math);

function generatoreBombe (min, max) {
   var math = Math.floor(Math.random () * ((max - min) + 1) + min);
  return math;
}

// CREARE UN CICLO WHILE CHE CONTINUA A ITERARE FINCHE NON AVREMO 16 VALORI DIVERSI NELL'ARRAY USANDO INCLUDES

var contatoreBombe = 16;

while (bombe.length < contatoreBombe) {
    var generatore = generatoreBombe(1, 100);
    if (! bombe.includes(generatore)) {
        bombe.push(generatore);
    }
}
console.log(bombe);


// L'UTENTE HA 84 TENTATIVI PER INSERIRE NUMERO TRA 1 E 100
// IL NUMERO INSERITO NON PUO' ESSERE LO STESSO

for (var i = 0; i < 5; i++) {
    var numeriUtente = parseInt (prompt ("inserisci un numero") );
    if (bombe[i] === numeriUtente) {
        i = 5;
        alert("hai perso");
    }
}

// var contatoreGiocatore = 5;
// var numeroGiocate = 0;
// while (numeroGiocate < contatoreGiocatore) {
//     var numeroInserito = parseInt( prompt ("inserisci un numero") );
//     if (bombe.includes() === numeroInserito) {
//         console.log("hai perso");
//     } 
//     numeroGiocate++;
// }

// while ()

// SE IL NUMERO E' NELLA LISTA DEI 16 NUMERI O IL GIOCATORE FINISCE I TENTATIVI LA PARTITA FINISCE

// SE INSERISCE UN NUMERO TRA I 16 PERDE, SE FINISCE I TENTATIVI 
// SENZA PESCARE I 16 NUMERI VINCE
