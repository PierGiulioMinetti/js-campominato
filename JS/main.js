// GENERAZIONE BOMBE (16 numeri casuali non ripetibili)
// creare un array vuota e una funzione generatore numeri

var bombe16 = [];

// creazione 16 numeri bombe
for( var i = 0; i <= 3; i++) {
    var bombeCasuali = generaNumeriCasuali(1, 100);
    if (!bombe16.includes(bombeCasuali) ) {
        bombe16.push(bombeCasuali);
    }
    console.log(bombe16);
}

// CHIEDERE ALL'UTENTE DI INSERIRE 84 NUMERI NON RIPETIBILI TRA 1 E 100
var arrayNumeriUtente = [];

for ( var i = 0; i < 84; i++) {
    var numeroUtente = parseInt (prompt ("inserisci un numero tra 1 e 100" ) );
    while (arrayNumeriUtente.includes(numeroUtente)){
        alert("numero già inserito, inseriscine un altro!");
        break
    }
    if ( numeroUtente > 100 || numeroUtente < 1 ) {
        alert("scegli numero tra il range!");
    }  else if (bombe16.includes(numeroUtente)) {
        alert("bomba attivata, hai perso!");
        alert("il tuo punteggio è: " + arrayNumeriUtente.length);
        break
    } else if (!bombe16.includes(numeroUtente) ) {
        arrayNumeriUtente.push(numeroUtente);
        alert("inserisci prossimo numero");
    }
 
}


// FUNZIONI

function generaNumeriCasuali (min, max) {
    return Math.floor(Math.random() * ((max - min) +1) + min)
}
var numero = generaNumeriCasuali(1, 10);
console.log(numero);