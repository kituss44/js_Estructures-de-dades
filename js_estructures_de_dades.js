/* Exercici 1:

let nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100 + 1));
nums.sort((a, b) => a - b);
let primer = nums[0];
let ultim = nums[nums.length - 1];
console.log("ordre de menor a major:", nums);
console.log("numero petit:", primer);
console.log("numero gran:", ultim);*/

/* Exercici 2:

let copiaNums = [...nums];
console.log("segon array: ", copiaNums);*/

/* Exercici 3, 4:

let a1 = [1, 2, 3, 4];
let a2 = [3, 4, 5, 6];
let a12 = a1.concat(a2);
let a0 = [];
for (let num of a12) {
    if (!a0.includes(num)) {
        a0.push(num);
    }
}
console.log("dos arrais junts:", a12);
console.log("arrais sense duplicacions:", a0);
let set = [...new Set(a1.concat(a2))];
console.log("amb set:", set);*/

/* Exercici 5

function cub(arr) {
    let r = [];
    for (let num of arr) {
        r.push(num ** 3);
    }
    return r;
}
console.log(cub([1, 3, 6]));*/

/* Exercici 6

let paraules = ["casa", "taula", "nadal", "pera", "arrasar"];
let resultat = [];
for (let p of paraules) {
    let cuenta = 0;
    for (let lletra of p) {
        if (lletra === 'a') cuenta++;
    }
    if (cuenta > 1) resultat.push(p);
}
console.log(resultat);*/

/* Exercici 7

let mapa = new Map();
mapa.set("clau", 123);
mapa.set(42, "hola");
mapa.set(true, "patata");
console.log(mapa);*/

// Exercici 9

let pelicules = [];
pelicules.push({ titol: "Matrix", any: 1999 });
pelicules.push({ titol: "El Padrino", any: 1972 });
pelicules.push({ titol: "Inception", any: 2010 });
let mesAntiga = pelicules[0];
for (let peli of pelicules) {
    if (peli.any < mesAntiga.any) {
        mesAntiga = peli;
    }
}
console.log("La pel·lícula més antiga és:", mesAntiga.titol, mesAntiga.any);

