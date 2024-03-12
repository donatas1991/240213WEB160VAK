console.log('Veikia');

// OBJEKTO KONSTRUKTORIUS

function Mokinys(name, surname) {
    this.firstName = name;
    this.lastName = surname;
    this.grades = [];
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    this.evaluate = function (grade) {
        this.grades.push(grade);
    };
    this.averageGrade = function () {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    };
}

let petras = new Mokinys('petras', 'petraitis');
let jonas = new Mokinys('jonas', 'jonaitis');

console.log(petras);
console.log(jonas);

petras.evaluate(8);
petras.evaluate(9);

jonas.evaluate(10);
jonas.evaluate(7);
jonas.evaluate(10);

console.log(petras.averageGrade());
console.log(jonas.averageGrade());

let tekstas = 'kazkoks tekstas';
console.log(tekstas.toLowerCase());
console.log(tekstas.length);
console.log(tekstas.slice(0, 7));
console.log(tekstas.slice(-7));
console.log(tekstas.replace('tekstas', 'sakinys'));


let skaicius = 10;
skaicius = skaicius + 9;

skaicius += 9;

// PRISKIRIMO OPERATORIAI
skaicius -= 8;
skaicius *= 4;
skaicius /= 8;
console.log(skaicius);


//PALIGYNIMO OPERATORIAI
console.log(5 == 5);
//true
console.log(5 !== 5);
//false
console.log(5 === '5');
//false
console.log(5 == '5');
//true
console.log(5 > 5);
//false
console.log(5 < 10);
//true
console.log(5 >= 5);
//true
console.log(5 <= 4);
//false



//LOGINIAI OPERATORIAI

//&&- AND
// ||-OR
console.log(5 == 5 && 10 > 5);
//5 == 5 - true
// 10 > 5 - true
//true

console.log(5 == 5 && 10 < 5);
// 5 == 5 -true
//
//false

console.log(5 == 5 || 10 < 5);
// true

console.log(5 == 5 || 10 < 5 || 10 != 10);
//true

console.log(5 == 5 && (10 < 5 || 10 == 10));
//true

console.log(!true);
//false

console.log(!false);
//true

console.log(5 == 5 && !(10 < 5 || 10 == 10));
//false


//INKREMENTINIAI OPERATORIAI

let x = 10;
console.log(x++);
//10
console.log(x);
//11
console.log(++x);
//12

//SALYGOS

// let biudzetas = prompt('kiek turite pinigu?');
// let klimatas = prompt('koks klimatas jums patinka?');

// let kriptis = '';

// if (biudzetas >= 4000 && klimatas == 'karšta') {
//     kriptis = 'Naujoji Zelandija';
// } else if (biudzetas >= 4000 && klimatas == 'šalta') {
//     kriptis = 'Islandija';
// } else if (biudzetas >= 1000) {
//     kriptis = 'Skandinavijos šalys';
// } else {
//     kriptis = 'Bulgarija arba Serbija';
// }

// console.log('Mes Jums siūlome keliauti į ' + kriptis + '.');


// if (window.innerWidth > 1000) {
//     alert('jus naudojates dideliu ekranu!')
// }


//CIKLAI

for (let i = 0; i <= 10; i++) {
    console.log('i = ' + i);
}

for (let j = 100; j >= 90; j--) {
    console.log('j = ' + j);
}

// Math.random().toString(36).slice(2, 7);

let nuolaiduKuponai = [];

function generuotiNuolaiduKupona() {
    return Math.random().toString(36).slice(2, 7).toUpperCase();
}

for (let k = 0; k < 100; k++) {
    let kuponoKodas = generuotiNuolaiduKupona();

    while (nuolaiduKuponai.indexOf(kuponoKodas) != -1) {

        kuponoKodas = generuotiNuolaiduKupona();
    }
    nuolaiduKuponai.push(kuponoKodas);
}
console.log(nuolaiduKuponai);