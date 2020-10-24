// lista 16 numeri casuali
var listaNumeriCasuali = [];
var size = 5;

while (listaNumeriCasuali.length < size) {
    var numeroCasuale = generaNumeri(1, 20);
    if (!listaNumeriCasuali.includes(numeroCasuale)) {
        listaNumeriCasuali.push(numeroCasuale);
    }
}
console.log(listaNumeriCasuali);


// lista numeri inseriti dall'utente
var numeriUtente = [];
// finchè il numero sarà diverso, tra 1 e 100 e non compreso nell'array, devo pusharlo all'interno dell'array

for (var i = 0; i < 10; i++) {
    var domanda = parseInt(prompt("inserire un numero tra 1 e 20"))
    while(domanda < 1 || domanda > 20 || isNaN(domanda)) {
        alert("inserisci un numero nel range giusto!");
        break;
    }
     if (listaNumeriCasuali.includes(domanda)) {
        alert("hai attivato una bomba, hai perso!");
        alert(numeriUtente.length + " tentativi riusciti")
        break;
    } else  if (!numeriUtente.includes(domanda) && !isNaN(domanda) && domanda > 0 && domanda < 20) {
        alert("campo libero, procedi!");
        numeriUtente.push(domanda);
        console.log(domanda);
    }
}



// funzione per la creazione numeri casuali
function generaNumeri (max,min) {
    var risultato = (Math.floor(Math.random ()* (max-min) + 1) + min);
    return risultato;
}