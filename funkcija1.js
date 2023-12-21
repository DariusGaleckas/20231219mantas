// pirmas
// Para6ykite funkcij1, kurios argumentas
// b8t7 tekstas, kuris 


function text(tekstas) {
    console.log(tekstas);

}

const vardas = `mantas`
const pavarde = `Samas`

text(vardas, pavarde)



//antras

function antra(tekstas, kartai) {
    //ciklas, jei daugiau nei 1 karta
    for (let i=0; i<kartai; i++) {
        text(tekstas)
    }
}
console.log(antra("labas",6))

// trecias

function trecia(skaicius) {
    let count = 0
for (let i = 2; i < Math.sqrt(skaicius); i++) {
    if(skaicius % i === 0) {
        if (skaicius/i ===i) 
    count++;
}
        else {
            count+=2
        }
    }
return count;
}
console.log(trecia(100))

// ketvirta

function ketvirta(arr,min,max) {
    let naujasMasyvas = []

    for (let i = 0; i < arr; i++)

    const rand = Math.floor(math.random() * (max - min) + min);
    naujasMasyvas.push(rand)
}


    return naujasMasyvas
}
console.log(ketvirta(10, 33, 77))


//penkta

function penkta(arr, min, max) {
    let array = []

}

function isPrime(number) {
    if(number<=1)
    return false
    
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

//kita paskaita masyvai.