//function ifas(asd) {
  //  if (condition)
//}

function add(a,b) {
    return console.log(a+b)
}

add(5,9)

//Ar skaicius lyginis
function even(number) {
    return console.log(number % 2 === 0)

}

even(7)

function greeting(name) {
    console.log(`Labas ${name}`);
}

greeting(`Jon`)

function factorial(number) {
    if (number===0 || number===1) {
        return 1
         }
         else {
            return number * factorial(number-1)

         }
}
const fact = factorial(5)
console.log(fact);


function ciklai(kartai) {
    if(kartai>0){
        console.log(`Veiksmas nr. `+kartai)
        ciklai(kartai-1)
    }
}

ciklai(5)


function temp(celsius) {
    return console.log((celsius *9/5) +32)
}
temp(5)

function maxNumber(arr) {
    return Math.max(...arr)

}
console.log(maxNumber ([1,55,32,55,22]))


function getRandomNumber(min,max) {
    return Math.floor(Math.random() * 
    (max-min + 1)) + min
}

console.log(getRandomNumber(5,100))


function getUnique(array) {
    return [...new Set(array)]

}
console.log(getUnique([1,1,1,1,2,2,2,2,3,3,3,3,]));

function squareValue(array) {
    return array.map(item =>item*item)
}

let array = [5,6,10]

console.log(array);

let newasd = squareValue(array);
console.log(newasd);
const newweewe = (squareValue(newasd))
console.log(newweewe)
console.log(array);

console.log(squareValue([]));


function sliceArray(array,start,end) {
    return array.slice(start,end)
}

console.log(sliceArray([1,5,74,1,12,7,7],2,4));


function getBiger(biger) {
    return console.log((biger * 2))

}
    getBiger(30);

 

function maxNr(arr) {
    return Math.max(...arr)

}
console.log(maxNr ([1,55,132,]))


function text(tekstas) {
    return console.log(tekstas.length); 

}

text("labasas")





//if (number == "2" || number === "2") { antras false
//
 //   }


 //










