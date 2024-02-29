let vartotojoVardas;

vartotojoVardas = 'Donatas';

// alert(vartotojoVardas);
console.log(vartotojoVardas);
document.write(vartotojoVardas);

vartotojoVardas = 'Petras';
console.log(vartotojoVardas);

const svetainesPavadinimas = 'vilniuscodingschool.lt';

console.log(svetainesPavadinimas);

// svetainesPavadinimas = 'kaunascodingschool.lt';

// let manoVardas = prompt('Koks yra jusu vardas?');

// console.log(manoVardas);

//DUOMENU TIPAI:
let tekstas = 'kazkoks tekstas';
let skaicius = -10.5;
let loginis = true; //arba false
let nulas = null;
let nepriskirta;

console.log(typeof tekstas);


console.log(typeof nepriskirta);

//MASYVAI:
let mokiniai = ['Donatas', 'Tomas', 'Dovile', 'Pavelas', 'Vytautas'];
console.log(mokiniai);
console.log(mokiniai.length);
console.log(mokiniai[3]);

mokiniai.pop();
console.log(mokiniai);

mokiniai.push('Erlandas');
console.log(mokiniai);

mokiniai.shift();
console.log(mokiniai);

mokiniai.unshift('Kazimiras');
console.log(mokiniai);

let dovilesIindeksas = mokiniai.indexOf('Dovile');
console.log(mokiniai[dovilesIindeksas]);


//FUNKSIJOS:

// let skaiciusKuriNoriuPakeltiLaipsniu = prompt('Įveskite skaičių kurį norite pakelti laipsniu:');
// let laipsnioSkaicius = prompt('Įveskite laipsnio skaičių:');
// let svarai = prompt('Įveskite svarus kuriuos norite konvertuoti į kilogramus:');
// let manoVardas = prompt('Įveskite savo vardą:');


// function pakeltiLaipsniu(skaicius, laipsnis) {
//     return Math.pow(skaicius, laipsnis);
// }

// function poundsToKilos(pounds) {
//     return pounds / 2.2046;
// }

// function pasisveikinimas(vardas) {
//     console.log('Sveiki ' + vardas + '! Kaip Jums šiandien sekasi?');
// }
// // Sveiki Donatai! Kaip Jums šiandien sekasi?


// let rezultatas = pakeltiLaipsniu(skaiciusKuriNoriuPakeltiLaipsniu, laipsnioSkaicius);
// console.log(rezultatas);

// let kilos = poundsToKilos(svarai);
// console.log(kilos);

// pasisveikinimas(manoVardas);


//OBJEKTAI

let mokinys = {
    firstName: 'Donatas',
    lastName: 'Skardinskas',
    grades: [],
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }, 
    evaluate: function(grade) {
        this.grades.push(grade);
    },
    averageGrade: function() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;

    }
}

console.log(mokinys.fullName());
 
mokinys.evaluate(7);
mokinys.evaluate(4);
mokinys.evaluate(8);
mokinys.evaluate(10);

console.log(mokinys.averageGrade())