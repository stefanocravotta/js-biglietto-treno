
// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO

/* 
1. CHIEDERE ALL'UTENTE IL NUMERO DI KM DA PERCORRERE
2. CHIEDERE L'ETA' DEL PASSEGGERO
3.CALCOLARE IL PREZZO TOTALE DEL VIAGGIO IN BASE AI KM (0.21 € AL KM)
4.APPLICARE SCONTO PER I MINORENNI
5.APPLICARE SCONTO PER GLI OVER 60 
6.STAMPARE IL PREZZO FINITO CON MASSIMO DUE DECIMALI 
*/

// 1. CHIEDERE ALL'UTENTE IL NUMERO DI KM DA PERCORRERE

let kmViaggio = 100;

// 2. CHIEDERE L'ETA' DEL PASSEGGERO

const età = 18;


// 3.CALCOLARE IL PREZZO TOTALE DEL VIAGGIO IN BASE AI KM (0.21 € AL KM)

const prezzoKm = 0.21;
const prezzoViaggio = kmViaggio * prezzoKm;
console.log(prezzoViaggio);

/*  4.APPLICARE SCONTO PER I MINORENNI
    5.APPLICARE SCONTO PER GLI OVER 60 
 */ 


let sconto = 0;
console.log(sconto);


if (età < 18) {
    sconto = prezzoViaggio * 0.2;
    
}else if (età > 65) {
        sconto = prezzoViaggio * 0.4;

} else {
    sconto = 0;
}

const prezzoFinale = prezzoViaggio - sconto;
console.log(prezzoFinale);

 
// 6.STAMPARE IL PREZZO FINITO CON MASSIMO DUE DECIMALI

document.getElementById("output").innerHTML = prezzoFinale.toFixed(2);