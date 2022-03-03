const utente = parseInt(prompt("inserisci il numnero"));
while (isNaN(utente)){                                // co l'inserimento del while avrò la condizione che mi si ripeterà finche nel promnpt non inserirò un numero
    utente = parseInt(prompt("inserisci il numnero"));
}

if (utente >= 450){           // al massimo di 450 
    utente = 450;
}                                                               //esercizio svolto con la correzzione

for( i =0; i < utente; i++){
    const array= [];
    while(array.length < 10){
    array.push(Math.floor(Math.random() * 4528) +4);
    }
console.log(array);

}



