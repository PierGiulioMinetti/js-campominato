
// LISTA BOMBE
var listaBombe = [];

while (listaBombe.length < 2  ) {
    var number = numberGenerator(1,10);
    if (!listaBombe.includes(number)) {
        listaBombe.push(number);
    }
}
console.log(listaBombe);

// NUMERI UTENTE
var numeriUtente = [];

for (var i = 0; numeriUtente.length < 8; i++) {
    var inserisciNumero = parseInt (prompt ("inserisci un numero tra 1 e 10"));

    if (listaBombe.includes(inserisciNumero)) {
        alert(" bomba attivata! hai perso!");
        alert("sei sopravvissutto per: " + numeriUtente.length + " round" );
        break;
    }
    else if (numeriUtente.length === 7) {
        alert("complimenti, non hai attivato nessuna delle bombe! hai vinto!");
        alert("sei sopravvissutto per: " + numeriUtente.length + " round" );
        break;
    }
     else if (numeriUtente.includes(inserisciNumero)) {
        alert("numero già inserito, inserisci di nuovo un numero tra 1 e 10");
    }
    else if (!numeriUtente.includes(inserisciNumero) && !isNaN(inserisciNumero) && inserisciNumero < 11 && inserisciNumero > 0) {
        numeriUtente.push(inserisciNumero);
    } else if (inserisciNumero > 10 || inserisciNumero < 1 ){
        alert("inserisci un numero valido");
    }

}


// FUNZIONI
console.log(numeriUtente);

// creare funzione con generatore numeri tra 1 e 10a
function numberGenerator (min, max) {
    return (Math.round(Math.random() * (max - min) + min));
}
