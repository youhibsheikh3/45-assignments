//1 already installed node and ts 
// task  2
let person: string = "ahsan";
console.log(`hello ${person} do you want to learn python today `);

// task  3
let name1: string = "youhib";
console.log(name.toLowerCase());

// task 4
let name3 = "youhib";
console.log(name.toUpperCase());

// task 5
let name4 = "youhib";
console.log(name.replace(/\b\=/g, (c) => c.toUpperCase()));

// task  6
let personn: string = "\t\n youhib \n\t ";
console.log(personn);

//task  7 & 8
console.log(5 + 8);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);

// task 9
let num: number = 8;
console.log("my favourite number is ", num);

// task  10
let currentDate: string = "9-2-24";
let currentTime: string = "11:24";
console.log(`date ${currentDate}\ntime ${currentTime}`);

//task  11
let names: string[] = ['Friend1', 'Friend2', 'Friend3'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//task 12
let namess: string[] = ['Friend1', 'Friend2', 'Friend3'];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

// task  13
let transportationModes: string[] = ['motorcycle', 'car', 'bicycle'];
for (let i = 0; i < transportationModes.length; i++) {
    console.log(`I would like to own a ${transportationModes[i]}.`);
}

// task  14
let dinnerGuests: string[] = ['Person1', 'Person2', 'Person3'];
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner.`);
}

//task 15
let dinnerGuests2: string[] = ['Person1', 'Person2', 'Person3'];
let guestCantMakeIt: string = 'Person2';
console.log(`Unfortunately, ${guestCantMakeIt} can't make it to the dinner.`);


let newGuest: string = 'Person4';
let indexOfGuestCantMakeIt: number = dinnerGuests.indexOf(guestCantMakeIt);
dinnerGuests[indexOfGuestCantMakeIt] = newGuest;


for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner.`);
}

//task  16
let dinnerGuests3: string[] = ['Person1', 'Person4', 'Person3'];
console.log("Good news! We found a bigger dinner table.");


dinnerGuests3.unshift('Person5');

dinnerGuests3.splice(Math.floor(dinnerGuests3.length / 2), 0, 'Person6');


dinnerGuests3.push('Person7');


for (let i = 0; i < dinnerGuests3.length; i++) {
    console.log(`Dear ${dinnerGuests3[i]}, you are invited to dinner.`);
}


// task 17
let dinnerGuests: string[] = ['Person1', 'Person4', 'Person3'];
console.log("Initial Dinner Guests:", dinnerGuests);

console.log("Unfortunately, we can invite only two people for dinner.");

while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are still invited to dinner.`);
}

dinnerGuests.pop();
dinnerGuests.pop();

console.log("Final Dinner Guests:", dinnerGuests);


// task 18 
let placesToVisit: string[] = ['Tokyo', 'Paris', 'New York', 'Machu Picchu', 'Sydney'];

console.log("Original Order:", placesToVisit);

console.log("Alphabetical Order:", [...placesToVisit].sort());

console.log("Original Order (still):", placesToVisit);

console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

console.log("Original Order (still):", placesToVisit);

placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);


placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);






// task 19
console.log(`Number of people invited to dinner: ${placesToVisit.length}`);

// task 20 
let mountains: string[] = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu'];
console.log("Mountains:", mountains);

// task 21 -
let mountainObjects: { name: string; height: number }[] = [
    { name: 'Everest', height: 8848 },
    { name: 'K2', height: 8611 },
    { name: 'Kangchenjunga', height: 8586 },
    { name: 'Lhotse', height: 8516 },
    { name: 'Makalu', height: 8485 }
];

console.log("Mountain Objects:", mountainObjects);

// task 22
// console.log("Intentional Error:", placesToVisit[10]);

// console.log("Corrected Code:", placesToVisit);


// task 23
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

let number: number = 42;
console.log("Is number === 42? I predict True.");
console.log(number === 42);

let fruit: string = 'apple';
console.log("Is fruit !== 'orange'? I predict True.");
console.log(fruit !== 'orange');

let temperature: number = 25;
console.log("Is temperature > 20? I predict True.");
console.log(temperature > 20);

let isSunny: boolean = true;
console.log("Is it sunny AND warm? I predict True.");
console.log(isSunny && temperature > 20);

let isRaining: boolean = false;
console.log("Is it not raining OR cold? I predict True.");
console.log(!isRaining || temperature < 10);

let favoriteColors: string[] = ['blue', 'green', 'red'];
let colorToCheck: string = 'yellow';
console.log(`Is ${colorToCheck} in favoriteColors? I predict False.`);
console.log(favoriteColors.includes(colorToCheck));

let userRole: string = 'admin';
console.log("Is userRole equal to 'admin'? I predict True.");
console.log(userRole === 'admin');

let isLoggedIn: boolean = false;
console.log("Is the user not logged in? I predict True.");
console.log(!isLoggedIn);

// task 24 
let stringTest1: string = 'hello';
let stringTest2: string = 'Hello';

console.log("Are stringTest1 and stringTest2 equal (case-sensitive)? I predict False.");
console.log(stringTest1 === stringTest2);

console.log("Are stringTest1 and stringTest2 equal (case-insensitive)? I predict True.");
console.log(stringTest1.toLowerCase() === stringTest2.toLowerCase());

let numericalTest1: number = 10;
let numericalTest2: number = 5;

console.log("Is numericalTest1 greater than numericalTest2? I predict True.");
console.log(numericalTest1 > numericalTest2);

console.log("Is numericalTest1 less than or equal to numericalTest2? I predict False.");
console.log(numericalTest1 <= numericalTest2);

let arrayTest: string[] = ['apple', 'banana', 'orange'];
let itemToFind: string = 'banana';

console.log(`Is ${itemToFind} in arrayTest? I predict True.`);
console.log(arrayTest.includes(itemToFind));

let itemToNotFind: string = 'grape';
console.log(`Is ${itemToNotFind} not in arrayTest? I predict True.`);
console.log(!arrayTest.includes(itemToNotFind));

// task 25 
let alienColorPass: string = 'green';

if (alienColorPass === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}

let alienColorFail: string = 'red';

if (alienColorFail === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("No output - Test failed.");
}



// task 26 
const alienColor1: string = "green";

if (alienColor1 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

const alienColor2: string = "red";

if (alienColor2 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

// task 27
const alienColor3: string = "yellow";

if (alienColor3 === "green") {
    console.log("Player earned 5 points.");
} else if (alienColor3 === "yellow") {
    console.log("Player earned 10 points.");
} else if (alienColor3 === "red") {
    console.log("Player earned 15 points.");
}

const alienColor4: string = "red";

if (alienColor4 === "green") {
    console.log("Player earned 5 points.");
} else if (alienColor4 === "yellow") {
    console.log("Player earned 10 points.");
} else if (alienColor4 === "red") {
    console.log("Player earned 15 points.");
}

// task 28 
const age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// task 29 
const favoriteFruits: string[] = ["Bananas", "Strawberries", "Mangoes"];

if (favoriteFruits.includes("Bananas")) {
    console.log("You really like Bananas!");
}

if (favoriteFruits.includes("Strawberries")) {
    console.log("You really like Strawberries!");
}

if (favoriteFruits.includes("Mangoes")) {
    console.log("You really like Mangoes!");
}

if (favoriteFruits.includes("Apples")) {
    console.log("You really like Apples!");
}

if (favoriteFruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}






// 30 - Hello Admin
const usernames30: string[] = ["admin", "Eric", "John", "Alice", "admin123"];

for (const username of usernames30) {
    if (username.toLowerCase() === 'admin') {
        console.log(`Hello admin, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// 31 - No Users
const usernames31: string[] = [];
if (usernames31.length === 0) {
    console.log("We need to find some users!");
} else {
    usernames31.length = 0;
    console.log("All usernames have been removed.");
}

// 32 - Checking Usernames
const currentUsers: string[] = ["Alice", "Bob", "John", "Eve", "admin"];
const newUsers: string[] = ["Eve", "Mallory", "Bob", "Charlie", "Dave"];

for (const newUser of newUsers) {
    if (currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase())) {
        console.log(`Sorry, ${newUser}, you need to enter a new username.`);
    } else {
        console.log(`Congratulations, ${newUser}, the username is available.`);
        currentUsers.push(newUser);
    }
}

console.log("Updated list of current users:", currentUsers);


// task 33
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}



// task 34
const pizzaNames: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (const pizza of pizzaNames) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");



// Task 35
const animals: string[] = ["Dog", "Cat", "Rabbit"];

for (const animal of animals) {
    console.log(animal);
}

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// Task 36
function makeShirt(size: string, message: string) {
    console.log(`The shirt is size ${size} and the message is: ${message}`);
}

makeShirt("bara", "i love coding");
makeShirt("Medium", "JavaScript is love");
makeShirt("chota", "random message");

// Task 37
function makeShirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt is size ${size} and the message is: ${message}`);
}

makeShirt();
makeShirt("Medium");
makeShirt("Small", "Different message");

// Task 38
function describeCity(city: string, country: string = "Default Country") {
    console.log(`${city} is in ${country}`);
}

describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("Tokyo", "Japan");

// Task 39
function cityCountry(city: string, country: string) {
    return `"${city}, ${country}"`;
}

console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Paris", "France"));
console.log(cityCountry("Sydney", "Australia"));

// Task 40
function makeAlbum(artist: string, title: string, tracks: number | null = null) {
    const album: { artist: string; title: string; tracks?: number } = { artist, title };
    if (tracks !== null) {
        album.tracks = tracks;
    }
    return album;
}

const album1 = makeAlbum("Artist1", "Album1", 12);
const album2 = makeAlbum("Artist2", "Album2");
const album3 = makeAlbum("Artist3", "Album3", 8);

console.log(album1);

// Task 41
function showMagicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["Merlin", "Harry", "Gandalf"];
showMagicians(magicians);

// Task 42
function makeGreat(magicians: string[]) {
    const greatMagicians = magicians.map(magician => `${magician} the Great`);
    return greatMagicians;
}

const magicians2: string[] = ["Merlin", "Harry", "Gandalf"];
const greatMagicians: string[] = makeGreat(magicians2);
showMagicians(greatMagicians);

// Task 43
function makeGreat(magicians: string[]) {
    const greatMagicians = magicians.map(magician => `${magician} the Great`);
    return greatMagicians;
}

const magicians3: string[] = ["Merlin", "Harry", "Gandalf"];
const greatMagicians2: string[] = makeGreat([...magicians3]);
showMagicians(magicians3);
showMagicians(greatMagicians2);

// Task 44
function makeSandwich(...items: string[]) {
    console.log("Sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}

makeSandwich("Bread", "Ham", "Cheese");
makeSandwich("Baguette", "Turkey", "Lettuce", "Tomato");
makeSandwich("Wrap", "Chicken", "Avocado");

// Task 45
function carInfo(manufacturer: string, model: string, ...otherInfo: string[]) {
    const car: { [key: string]: string } = { Manufacturer: manufacturer, Model: model };
    otherInfo.forEach(info => {
        const [key, value] = info.split('=');
        car[key.trim()] = value.trim();
    });
    return car;
}

const car1 = carInfo("Toyota", "Camry", "color=Blue", "year=2022");
const car2 = carInfo("Tesla", "Model 3", "color=Red", "autopilot=true");

console.log(car1);
console.log(car2);
