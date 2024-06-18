// PRVNÍ CVIČENÍ
const input1 = document.querySelector('#numberOne') as HTMLInputElement;
const input2 = document.querySelector('#numberTwo') as HTMLInputElement;
const button = document.querySelector('#addBtn') as HTMLButtonElement;

const secti = (number1: number, number2: number) => {
  const result = number1 + number2;
  console.log(result);
};

button.addEventListener('click', () =>
  secti(input1.valueAsNumber, input2.valueAsNumber),
);

// DRUHÉ CVIČENÍ - NUMBER
const add = (n1: number, n2: number) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Špatný input.');
  }
  return n1 + n2;
};
// add('1', '3'); // Tento řádek vyhodí chybu, protože argumenty nejsou čísla

// TŘETÍ CVIČENÍ - BOOLEAN
let jeToPravda: boolean;
jeToPravda = true;

// ČTVRTÉ CVIČENÍ - OBJEKTY
const vehicles1 = {
  make: 'Ford',
  nrOfDoors: 3,
  working: false,
};

let vehicles2: {
  make: string;
  nrOfDoors: number;
  working?: boolean;
};

//Otazníkem jsme označili tuto položku jako nepovinnou

vehicles2 = {
  make: 'Mazda',
  nrOfDoors: 4,
};

interface Vehicle1 {
  make: string;
  nrOfDoors: number;
  working?: boolean;
}

let vehicle3: Vehicle1 = {
  make: 'Mazda',
  nrOfDoors: 4,
};

// PÁTÉ CVIČENÍ - POLE
let hobbies: string[];
// Je to pole řetězců.

hobbies = ['reading', 'jogging', 'eating'];

for (const hobby of hobbies) {
  console.log(hobby.toUpperCase());
}

interface Vehicle {
  make: string;
  nrOfDoors: number;
  working?: boolean;
  damagedParts: [string, number];
}

// DamagedParts je typ tuples - přesně definované pole o přesné délce.

let vehicle: Vehicle = {
  make: 'Mazda',
  nrOfDoors: 4,
  damagedParts: ['1X_12', 10],
};

vehicle.damagedParts[1] = 12;
// Metodou push mohu i do tuples přidat další hodnotu.
vehicle.damagedParts.push(11);

enum Fuel {
  LPG = 'lpg',
  N95 = 'n95',
  DIESEL = 'diesel',
}

const vehicle4: { fuel: Fuel } = {
  fuel: Fuel.DIESEL,
};

if (vehicle4.fuel === 'diesel') {
  console.log('Velký špatný.');
}

// enum
enum Seasons {
  winter,
  spring,
  summer,
  autumn,
}

// const seasonsGreetings = (season: Seasons) => {
//   if (season === Seasons.winter) return 'Je zima.';
//   if (season === Seasons.summer) return 'Je léto.';
// };

// const result = seasonsGreetings(Seasons.summer);
// console.log(result);

interface FetchData {
  status: 'Ok' | 'Error';
  currentSeason: Seasons;
}

const data: FetchData = {
  status: 'Ok',
  currentSeason: 0,
};

const seasonsGreetings = (data: FetchData) => {
  if (data.currentSeason === Seasons.winter) {
    console.log('Ano, je zima.');
  }
};

seasonsGreetings(data);

// union type
let value: string | number;

const printId = (id: string | number) => {
  console.log(`Your id is ${id}`);
};
printId(8);
printId('8');

let mixedArray: (string | number)[] = ['1', 2, '3'];
// pole stringů nebo čísel

mixedArray.forEach((item) => {
  if (typeof item === 'string') {
    console.log('Nejsem číslo.');
  } else {
    console.log('Já jsem číslo.');
  }
});

// literal types
// let move: 'north' | 'south' | 'east' | 'west';

// const navigate = (direction: 'north' | 'south' | 'east' | 'west') => {
//   console.log(`Navigating ${direction}`)
// }
// navigate("south")

// type
type Direction = 'north' | 'south' | 'east' | 'west';
let move: Direction;

const navigate = (direction: Direction) => {
  console.log(`Navigating ${direction}`);
};
navigate('south');

interface CoordinatesInterface {
  x: number;
  y: number;
}

type CoordinatesTuple = [number, number];

type Coordinates = CoordinatesInterface | CoordinatesTuple;

const getPosition = (point: Coordinates) => {
  if (Array.isArray(point)) {
    return { x: point[0], y: point[1] };
  } else {
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

const add2 = (n1: number, n2: number): void => {
  console.log(n1 + n2);
};
// typ void označujeme funkce, které nic nevrací
add2(1, 2);

interface MyComponent {
  data: string[];
  onChange: (value: string) => string;
}

const sectiAVypis = (
  n1: number,
  n2: number,
  action: (value: number) => void,
) => {
  const result = n1 + n2;
  action(result);
};
// callback je fetch, která se posílá jako parametr do jiné fce
sectiAVypis(1, 3, (result) => {
  console.log(result);
});

const logOutput = (message: string, yell?: boolean) => {};
// ? otazník říká, že tento parametr není povinný, tyto volitelné parametry musí být vždy na konci
logOutput('Ahoj');
logOutput('Ahoj', true);

// CVIČENÍ
// Přidejte správné anotace parametrům funkce

const multiplyNumbers = (a: number, b: number) => {
  return a * b;
};

// Přidejte správné anotace parametru funkce
const addNumbers = (numbers: { firstNumber: number; secondNumber: number }) => {
  return numbers.firstNumber + numbers.secondNumber;
};

// Upravte anotaci objektu addresy tak, aby adresa nemusela nutně obsahovat stát a PSČ
// Zkuste zjednodušit kód pomocí typového aliasu

type Address = { street: string; city: string; state?: string; zip?: string };

const getAddress = (params: Address) => {
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

// Použijte anotaci tak, abyste byli o chybě informování na řádku 40 (const defaultVehicle = {};)
interface Vehicle {
  numberOfWheels: number;
  make: string;
  VIN: string;
  isFunctional: boolean;
}

const defaultVehicle: Vehicle = {
  numberOfWheels: 3,
  make: 'Ford',
  VIN: '123',
  isFunctional: true,
};

const getVIN = (input: Vehicle) => {
  return input.VIN;
};

getVIN(defaultVehicle);

// Vlastnost level objektu Developer by měla obsahovat pouze tyto hodnoty: junior, medior, senior.
// Zkuste zjednodušit kód pomocí typového aliasu
type DeveloperLevel = 'junior' | 'medior' | 'senior';

interface Developer {
  id: number;
  firstName: string;
  lastName: string;
  level: DeveloperLevel;
}

const developer: Developer = {
  id: 1,
  firstName: 'Johnny',
  lastName: 'Black',
  level: 'medior',
};

const test = (item: Developer) => {
  if (item.level === 'junior') {
    console.log('No raise for you!');
  }
};

// Vytvořte union type, který zahrnuje obě dvě následující interfaces

interface Fruit {
  name: string;
  sweetness?: number;
}

interface Vegetable {
  name: string;
  hasSeeds: boolean;
}

type Food = Fruit | Vegetable;

// Naraďte unknown spávnou anotací
const apple: Food = { name: 'Apple', sweetness: 80 };
const onion: Food = { name: 'Vegetable', hasSeeds: false };

const avocado: Fruit = { name: 'Avocado', sweetness: 0 };

// Upravte následující funkci tak, aby vracela stupeň sladkosti, pokud jej potravina obsahuje
// nebo chybu, pokud jej neobsahuje

const getSweetness = (fruit?: Fruit): number => {
  if (fruit && fruit.sweetness) {
    const sweetness = fruit.sweetness;
    return sweetness;
  }
  throw new Error('Nejsem sladký.');
};

// Přidejte správné annotace funkcím
const fruitList = ['Apple', 'Banana', 'Orange'];

const transformFruit = (
  fruitList: string[],
  transformFunction: (value: string) => string,
) => {
  return fruitList.map(transformFunction);
};

const bakeFruit = (fruitName: string) => {
  return `Baked ${fruitName}`;
};

const bakedFruit = transformFruit(fruitList, bakeFruit);

let neznamyRetezec: unknown;

const processInput = (input: unknown) => {
  if (typeof input === 'string') {
    input.toUpperCase();
  }
};
// Můžeme dělat tuUpperCase, protože v podmínce jsme určili type, nad tím if by to nefungovalo.

const greeting = (name: string): void => {
  console.log(name);
};
// Když funkce nic nevrací (pomineme undefined), tak je to fce void.

const expection = () => {
  throw new Error('Mesaage');
};
// Návratová hodnota je never, tzn. během runtimu nikdy nic nevrátíme.
const output = expection();
console.log(output);

// INTERSECTIONS (PRŮNIKY)
interface Printable {
  print: () => string;
}
interface Loggable {
  log: () => void;
}

type PrintableAndLoggtable = Printable & Loggable;
interface PrintableAndLoggtableInterface extends Printable, Loggable {}

//  ZŮŽOVÁNÍ TYPŮ (porovnáváme hodnoty, ale i typy) - nedávala jsem pozor, doplnit první příklad

// in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

const move2 = (animal: Fish | Bird) => {
  if ('swim' in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
};

// instanceof operator (souvisí s děděním a prototypováním)
const logValue = (x: string | Date) => {
  if (x instanceof Date) {
    x.toISOString();
  }
};

// diskriminace (discrimination union)

// interface OldShape {
//   kind: 'circle' | 'square';
//   radius?: number;
//   sideLength?: number;
// }

interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

const getArea = (shape: Shape) => {
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
const getFirstItem = (list: number[]): number => {
  return list[0];
};

let firstItem = getFirstItem([1, 2, 3]);

const getFirstStringItem = (list: string[]): string => {
  return list[0];
};

let firstStringItem = getFirstStringItem(['1', '2', '3']);

const getFirstItemCombined = (list: (number | string)[]): number | string => {
  if (typeof list[0] === 'string') {
    return list[0].toUpperCase();
  }

  return list[0];
};

let firstItemCombinatedItem = getFirstItemCombined([1, 2, 3]);

const mojePrvnigenerickaFce = <MujTyp>(pole: MujTyp[]): MujTyp => {
  return pole[0];
};

// Ten typ, který do fce vstoupí, ten z funkce i vypadne.

const vysledek = mojePrvnigenerickaFce([1, 2, 3]);

// další příklad:
type Krabice<T> = {
  obsah: T;
  vyska: number;
  hloubka: number;
  sirka: number;
};
// Tento type by mohl být také klidně interface.

interface Bota {
  velikost: number;
  barva: string;
}

interface Klobouk {
  vyska: number;
  barva: string;
}

const krabiceBot: Krabice<Bota[]> = {
  obsah: [{ velikost: 38, barva: 'zelena' }],
  vyska: 10,
  hloubka: 20,
  sirka: 10,
};

const krabiceNaKlobouky: Krabice<Klobouk[]> = {
  obsah: [{ vyska: 20, barva: 'černá' }],
  vyska: 30,
  hloubka: 40,
  sirka: 50,
};

// další příklad:
interface KosNaOvoce<T extends Ovoce> {
  obsah: T[];
}

interface Ovoce {
  jmeno: string;
}

// Extends znamená, že dědí vlastnosti od rodiče.
interface Jablko extends Ovoce {
  odruda: string;
}

interface Pomeranc extends Ovoce {
  pecky: boolean;
}

const jablko: Jablko = {
  jmeno: 'Nej jablko',
  odruda: 'Misen',
};

const pomeranc: Pomeranc = {
  jmeno: 'Nej pomeramc',
  pecky: true,
};

const vlozDoKose = <T extends Ovoce>(vlozenaOvoce: T[]): KosNaOvoce<T> => {
  return {
    obsah: vlozenaOvoce,
  };
};

vlozDoKose([jablko, pomeranc]);
