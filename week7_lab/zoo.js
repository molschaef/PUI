// function Unicorn(name, age) {
//   this.name = name;
//   this.age = age;
//   this.type = "Unicorn";
//   this.image = “noun_Unicorn_2537375.png”;
// }

// function Snail(name, age) {
//   this.name = name;
//   this.age = age;
//   this.type = "Snail";
//   this.image = noun_Snail_2326707.png”;
// }

// function Worm(name, age) {
//   this.name = name;
//   this.age = age;
//   this.type = "Worm";
//   this.image = noun_worm_157853.png”;
// }

var animal = ["Unicorn", "Snail", "Worm"];

var names = ["Herbert", "Gerald", "Philipe"];

function generateRandomIndex(maxIndex) {
     return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge(maxIndex) {
    return generateRandomIndex(30);
}

function generateRandomAnimal() {
    randomIndex = generateRandomIndex(animal.length);
    return animal[randomIndex];
}