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

text("labasasasas")

// Funkcija, kuri grąžina pirmą raidę didžiąja raide

  let word = "darius";

  function capitalizeFirstLetter(word) {
    return console.log(word.charAt(0).toUpperCase() + word.slice(1));
  }

  capitalizeFirstLetter(word)
     // console.log(capitalizeFirstLetter(word))

// kitas

    const word1 = 'ddddarius';  
const [first, ...rest] = word1;  
const capitalizeFirstLetter1 = `${first.toUpperCase()}${rest.join('')}`;  
  
console.log(capitalizeFirstLetter1);  

// Funkcija, kuri grąžina masyvo pirmą elementą:

let array1 = [151,2,3];

function getFirstElement(array1) {
    return console.log(array1[0]);
  }
getFirstElement(array1)



//let = array2[1,2,3,45]

  function getLastElement(array2) {
    return array2[array2.length - 0];
  }
  //console.log(array2)


// Funkcija, kuri suskaičiuoja masyvo skaičių sumą:
let array33 = [1,2,3];
function sumArray(array33) {
  let sum = 0;
  for (let i = 0; i < array33.length; i++) {
    sum += array33[i];
  }
  return console.log(sum);
}

sumArray(array33)


// 3 budas
let array34 = [1,2,3,4]
function logArraySum(array34) {
    let sum = 0;
    for (let i = 0; i < array34.length; i++) {
      sum += array34[i];
    }
    console.log(sum);
  }

  logArraySum(array34)
  


function add(a,b) {
    return console.log(a+b)
}

add(5,9)

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);







//if (number == "2" || number === "2") { antras false
//
 //   }


 //










