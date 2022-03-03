/* function randomInteger(minvalue,maxvalue){
    if (isNaN(parseInt(minvalue)) || isNaN (parseInt(maxvalue)));{                             // in questo modo mi sono generato una funzione che avrà la funzione di generare 10 jumeri random che vanno da 0 a 100                           
    return(Math.floor(Math.random() *(maxvalue +1) - minvalue) + minvalue) 
}                                                                                               // il return mi restituirà il minvalore e il massimo valore dei numeri random 
}



for(let i = 0; i < 10; i++){                                                                  //con il ciclo for mi creo una lista di 10 numeri random che vanno da  0 a 100
    console.log(randomInteger(0,100))
}
 */

/* let nuovoDivGreen =document.createElement = ("div")
let nuovoDivRed =document.createElement = ("div")
const mainElement =document.querySelector("main");


mainElement.append(nuovoDivGreen,nuovoDivRed);
nuovoDivRed */

const redDiv = document.getElementById("red")
const greenDiv = document.getElementById("green")

let arrayNumber=[2,54847,54,54,874,8787,87964,3564,654654];

for (let i = 0; i < arrayNumber.length; i++){
    if(isEven(arrayNumber[i])){
        console.log(arrayNumber[i]) + "numero pari"
        redDiv.innerHTML+= arrayNumber[i]
    } else{
        console.log(arrayNumber[i]) + "numero dispari"
        greenDiv.innerHTML+= arrayNumber[i]
    }
}

function isEven (numero){
    if(numero % 2 == 0){
    return true;
} else{
    return false; 
}

}


