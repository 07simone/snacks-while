let listNumber=[];

let somma = 0;                                                      //esercziio corretto inserendo il push
while(somma < 200){
    listNumber.push(parseInt(prompt("inserire il numero")));
    somma += listNumber[listNumber.length -1];
    console.log ("la somma è:", somma);
}