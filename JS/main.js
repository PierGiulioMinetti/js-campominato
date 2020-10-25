// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// creare uno switch o un if
// cambia il range dei numeri diminuendolo

var max ;
var difficolta = parseInt (prompt ("scegli la difficoltà inserendo numeri da 1 a 3;\n16 bombe sparse sul campo;\n \n difficolta 1 : 100 numeri; \ndifficolta 2 : 80 numeri; \ndifficolta 3 : 50 numeri;") );

if (difficolta == 1) {
    max = 100;
} else if (difficolta == 2) {
    max = 80;
} else if (difficolta == 3) {
    max = 50;
}

// switch(difficolta) {
//     case "difficoltà 1":
//       max = 100;
//       break;
//     case "difficoltà 2":
//         max = 80;
//       break;
//       case "difficoltà 3":
//         max = 50;
//         break;
//     default:
//       alert("inserisci : 'difficoltà + numero difficoltà scelta'");
//   }





// LISTA BOMBE
var listaBombe = [];

while (listaBombe.length < 16  ) {
    var number = numberGenerator(1,max);
    if (!listaBombe.includes(number)) {
        listaBombe.push(number);
    }
}
console.log(listaBombe);

// NUMERI UTENTE
var numeriUtente = [];

for (var i = 0; numeriUtente.length < 84; i++) {
    var inserisciNumero = parseInt (prompt ("inserisci un numero tra 1 e " + max));

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
        alert("numero già inserito, inserisci di nuovo un numero tra 1 e " + max);
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
