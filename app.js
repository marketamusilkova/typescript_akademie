"use strict";
// PRVNÍ CVIČENÍ
const input1 = document.querySelector('#numberOne');
const input2 = document.querySelector('#numberTwo');
const button = document.querySelector('#addBtn');
const secti = (number1, number2) => {
    const result = number1 + number2;
    console.log(result);
};
button.addEventListener('click', () => secti(input1.valueAsNumber, input2.valueAsNumber));
// DRUHÉ CVIČENÍ - NUMBER
const add = (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Špatný input.');
    }
    return n1 + n2;
};
// add('1', '3'); // Tento řádek vyhodí chybu, protože argumenty nejsou čísla
// TŘETÍ CVIČENÍ - BOOLEAN
let jeToPravda;
jeToPravda = true;
// ČTVRTÉ CVIČENÍ - OBJEKTY
const vehicles1 = {
    make: 'Ford',
    nrOfDoors: 3,
    working: false,
};
let vehicles2;
//Otazníkem jsme označili tuto položku jako nepovinnou
vehicles2 = {
    make: 'Mazda',
    nrOfDoors: 4,
};
let vehicle3 = {
    make: 'Mazda',
    nrOfDoors: 4,
};
// PÁTÉ CVIČENÍ - POLE
let hobbies;
// Je to pole řetězců.
hobbies = ['reading', 'jogging', 'eating'];
for (const hobby of hobbies) {
    console.log(hobby.toUpperCase());
}
// DamagedParts je typ tuples - přesně definované pole o přesné délce.
let vehicle = {
    make: 'Mazda',
    nrOfDoors: 4,
    damagedParts: ['1X_12', 10],
};
vehicle.damagedParts[1] = 12;
// Metodou push mohu i do tuples přidat další hodnotu.
vehicle.damagedParts.push(11);
var Fuel;
(function (Fuel) {
    Fuel["LPG"] = "lpg";
    Fuel["N95"] = "n95";
    Fuel["DIESEL"] = "diesel";
})(Fuel || (Fuel = {}));
const vehicle4 = {
    fuel: Fuel.DIESEL,
};
if (vehicle4.fuel === 'diesel') {
    console.log('Velký špatný.');
}
// enum
var Seasons;
(function (Seasons) {
    Seasons[Seasons["winter"] = 0] = "winter";
    Seasons[Seasons["spring"] = 1] = "spring";
    Seasons[Seasons["summer"] = 2] = "summer";
    Seasons[Seasons["autumn"] = 3] = "autumn";
})(Seasons || (Seasons = {}));
const data = {
    status: 'Ok',
    currentSeason: 0,
};
const seasonsGreetings = (data) => {
    if (data.currentSeason === Seasons.winter) {
        console.log('Ano, je zima.');
    }
};
seasonsGreetings(data);
// union type
let value;
const printId = (id) => {
    console.log(`Your id is ${id}`);
};
printId(8);
printId('8');
let mixedArray = ['1', 2, '3'];
// pole stringů nebo čísel
mixedArray.forEach((item) => {
    if (typeof item === 'string') {
        console.log('Nejsem číslo.');
    }
    else {
        console.log('Já jsem číslo.');
    }
});
let move;
const navigate = (direction) => {
    console.log(`Navigating ${direction}`);
};
navigate('south');
const getPosition = (point) => {
    if (Array.isArray(point)) {
        return { x: point[0], y: point[1] };
    }
    else {
        return point;
    }
};
console.log(getPosition([12, 12]));
console.log(getPosition({ x: 12, y: 12 }));
// funkce
// const add = (n1: number, n2: number): number => {
//   return n1 + n2;
// };
// tím posledním number zadávám, co bude funkce vracet
const add2 = (n1, n2) => {
    console.log(n1 + n2);
};
// typ void označujeme funkce, které nic nevrací
add2(1, 2);
const sectiAVypis = (n1, n2, action) => {
    const result = n1 + n2;
    action(result);
};
// callback je fce, která se posílá jako parametr do jiné fce
sectiAVypis(1, 3, (result) => {
    console.log(result);
});
const logOutput = (message, yell) => { };
// ? otazník říká, že tento parametr není povinný, tyto volitelné parametry musí být vždy na konci
logOutput('Ahoj');
logOutput('Ahoj', true);
// CVIČENÍ
// Přidejte správné anotace parametrům funkce
const multiplyNumbers = (a, b) => {
    return a * b;
};
// Přidejte správné anotace parametru funkce
const addNumbers = (numbers) => {
    return numbers.firstNumber + numbers.secondNumber;
};
const getAddress = (params) => {
    const { street, city, state, zip } = params;
    let address = `${street}, ${city}`;
    if (state) {
        address += `, ${state}`;
    }
    if (zip) {
        address += `, ${zip}`;
    }
    return address;
};
const fullAddress = getAddress({
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
});
const partialAddress = getAddress({ street: '456 Elm St', city: 'Metropolis' });
const defaultVehicle = {
    numberOfWheels: 3,
    make: 'Ford',
    VIN: '123',
    isFunctional: true,
};
const getVIN = (input) => {
    return input.VIN;
};
getVIN(defaultVehicle);
const developer = {
    id: 1,
    firstName: 'Johnny',
    lastName: 'Black',
    level: 'medior',
};
const test = (item) => {
    if (item.level === 'junior') {
        console.log('No raise for you!');
    }
};
// Naraďte unknown spávnou anotací
const apple = { name: 'Apple', sweetness: 80 };
const onion = { name: 'Vegetable', hasSeeds: false };
const avocado = { name: 'Avocado', sweetness: 0 };
// Upravte následující funkci tak, aby vracela stupeň sladkosti, pokud jej potravina obsahuje
// nebo chybu, pokud jej neobsahuje
const getSweetness = (fruit) => {
    if (fruit && fruit.sweetness) {
        const sweetness = fruit.sweetness;
        return sweetness;
    }
    throw new Error('Nejsem sladký.');
};
// Přidejte správné annotace funkcím
const fruitList = ['Apple', 'Banana', 'Orange'];
const transformFruit = (fruitList, transformFunction) => {
    return fruitList.map(transformFunction);
};
const bakeFruit = (fruitName) => {
    return `Baked ${fruitName}`;
};
const bakedFruit = transformFruit(fruitList, bakeFruit);
let neznamyRetezec;
const processInput = (input) => {
    if (typeof input === 'string') {
        input.toUpperCase();
    }
};
// Můžeme dělat tuUpperCase, protože v podmínce jsme určili type, nad tím if by to nefungovalo.
const greeting = (name) => {
    console.log(name);
};
// Když funkce nic nevrací (pomineme undefined), tak je to fce void.
const expection = () => {
    throw new Error('Mesaage');
};
// Návratová hodnota je never, tzn. během runtimu nikdy nic nevrátíme.
const output = expection();
console.log(output);
const move2 = (animal) => {
    if ('swim' in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
};
// instanceof operator (souvisí s děděním a prototypováním)
const logValue = (x) => {
    if (x instanceof Date) {
        x.toISOString();
    }
};
const getArea = (shape) => {
    // if (shape.kind === 'square') {
    //   return shape.sideLength * shape.sideLength;
    // }
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength * shape.sideLength;
    }
};
// GENERIC (Generické typy)
const getFirstItem = (list) => {
    return list[0];
};
let firstItem = getFirstItem([1, 2, 3]);
const getFirstStringItem = (list) => {
    return list[0];
};
let firstStringItem = getFirstStringItem(['1', '2', '3']);
const getFirstItemCombined = (list) => {
    if (typeof list[0] === 'string') {
        return list[0].toUpperCase();
    }
    return list[0];
};
let firstItemCombinatedItem = getFirstItemCombined([1, 2, 3]);
const mojePrvnigenerickaFce = (pole) => {
    return pole[0];
};
// Ten typ, který do fce vstoupí, ten z funkce i vypadne.
const vysledek = mojePrvnigenerickaFce([1, 2, 3]);
const krabiceBot = {
    obsah: [{ velikost: 38, barva: 'zelena' }],
    vyska: 10,
    hloubka: 20,
    sirka: 10,
};
const krabiceNaKlobouky = {
    obsah: [{ vyska: 20, barva: 'černá' }],
    vyska: 30,
    hloubka: 40,
    sirka: 50,
};
const jablko = {
    jmeno: 'Nej jablko',
    odruda: 'Misen',
};
const pomeranc = {
    jmeno: 'Nej pomeramc',
    pecky: true,
};
const vlozDoKose = (vlozenaOvoce) => {
    return {
        obsah: vlozenaOvoce,
    };
};
vlozDoKose([jablko, pomeranc]);
