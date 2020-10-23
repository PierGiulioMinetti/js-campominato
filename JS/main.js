// GENERARE 16 NUMERI COMPUTER TRA 1 E 100
// I NUMERI NON POSSONO ESSERE DUPLICATI

// L'UTENTE HA 84 TENTATIVI PER INSERIRE NUMERO TRA 1 E 100
// IL NUMERO INSERITO NON PUO' ESSERE LO STESSO

// SE IL NUMERO E' NELLA LISTA DEI 16 NUMERI O IL GIOCATORE FINISCE I TENTATIVI LA PARTITA FINISCE

// SE INSERISCE UN NUMERO TRA I 16 PERDE, SE FINISCE I TENTATIVI 
// SENZA PESCARE I 16 NUMERI VINCE



// LISTA 16 NUMERI TRA 1 E 100 (BOMBE)

var bombe = [];
var math=generatoreBombe(1,5)
console.log(math);

function generatoreBombe (min, max) {
   var math = Math.floor(Math.random () * ((max - min) + 1) + min);
  return math;
}

// CREARE UN CICLO WHILE CHE CONTINUA A ITERARE FINCHE NON AVREMO 16 VALORI DIVERSI NELL'ARRAY USANDO INCLUDES

var contatore = 16;

while (bombe.length < 16) {
    var generatore = generatoreBombe(1, 100);
    if (!bombe.includes(generatore)) {
        bombe.push(generatore);
    }
}
console.log(bombe);