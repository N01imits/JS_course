// function describeCountry(country, population, capitalCity) {
// 	return `${country} has ${population} millions people and its capital city is ${capitalCity}`;
// }

// const descriptionRussia = describeCountry("Russia", 145, "Moscow");
// const descriptionArgentina = describeCountry("Argentina", ;46, "Buenos Aires");
// const describeDenmark = describeCountry("Denmark", 0.6, "Copenhagen");
// console.log(`${descriptionRussia},
// ${descriptionArgentina},
// ${describeDenmark}`);

// ? function Declarations
// function percentageOfWorld1(population) {
// 	return (population / 7900) * 100;
// }

//  ? function Expressions
// const percentageOfWorld2 = function (population) {
// 	return (population / 7900) * 100;
// };

// const percRussia = percentageOfWorld1(145);
// const percDenmark = percentageOfWorld1(0.6);
// const percArgentina = percentageOfWorld1(46);
// console.log(percRussia, percDenmark, percArgentina);

// ? arrow function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percRussia = percentageOfWorld3(145);
// const percDenmark = percentageOfWorld3(0.6);
// const percArgentina = percentageOfWorld3(46);
// console.log(percRussia, percDenmark, percArgentina);

// ? Function calling other function
// const describePopulation = (country, population) => {
// 	const percentageOfWorld = percentageOfWorld3(population);
// 	const description = `${country} has ${population} million people which is about ${percentageOfWorld.toFixed(
// 		2,
// 	)}% of the world`;
// 	return description;
// };
// console.log(describePopulation("Russia", 145));
// console.log(describePopulation("Denmark", 0.6));
// console.log(describePopulation("Argentina", 46));
// console.log(describePopulation("China", 1441));

// ? Intro to arrays
// const populations = [333, 1411, 218, 168];
// console.log(populations.length === 4);

// const percentages = [
// 	percentageOfWorld3(populations[0]),
// 	percentageOfWorld3(populations[1]),
// 	percentageOfWorld3(populations[2]),
// 	percentageOfWorld3(populations[populations.length - 1]),
// ];

// console.log(percentages);

// ? Basic Array Operations (Methods)
// const neighbours = ["Russia", "Kazakhstan", "Norway", "Finland"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
// 	console.log("Probably not a central European country :D");
// } else {
// 	console.log("This is probably a central European country!");
// }

// !neighbours.includes("Germany")
// 	? console.log("Probably not a central European country :D")
// 	: console.log("This is probably a central European country!");

// neighbours[neighbours.indexOf("Norway")] = "Switzerland";
// console.log(neighbours);

// ? intro to object
// const myCountry = {
// 	country: "Russia",
// 	capital: "Moscow",
// 	language: "Russian",
// 	population: 144,
// 	neighbours: ["China", "Norway", "Poland", "Belarus"],
// };

// console.log(myCountry);
// console.log(myCountry.population);

// * challenge + challenge 2
// const jonas = {
// 	firstName: "Ivan",
// 	lastName: "Schmedtmann",
// 	age: "",
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// 	birthYear: 1991,
// 	driverLicense: true,
// 	calcAge: function () {
// 		return (this.age = 2023 - this.birthYear);
// 	},
// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${
// 			this.driverLicense ? "a" : "no"
// 		} driver's license`;
// 	},
// };
// console.log(jonas);
// console.log(
// 	`${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
// );

// ? Dot vs. Bracket Notation
// console.log(
// 	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
// 	${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry.population);

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas["calcAge"](jonas["birthYear"]));

// * challenge 2
// console.log(jonas.getSummary());

// ? object methods
/* const myCountry = {
	country: "Russia",
	capital: "Moscow",
	language: "Russian",
	population: 144,
	neighbours: ["China", "Norway", "Poland", "Belarus"],
	describe: function () {
		return `${this.country} has ${this.population} million ${this.language}-speaking people, 
${this.neighbours.length} neighbouring countries and a capital called ${this.capital}, and this ${
			this.isIsland === false ? "is not" : "is"
		} island `;
	},
	checkIsland: function () {
		// this.isIsland = this.neighbours.length === 0 ? true : false;
		this.isIsland = !Boolean(this.neighbours.length); // think about it
		return this.isIsland;
	},
};
 */
// myCountry.checkIsland();
// myCountry.describe();
// console.log(myCountry.describe());

// ? iteration: the for loop
/* for (let voter = 1; voter <= 50; voter++) {
	// voter++ сначала переходит на строку ниже и выводится, а только затем увеличивается
	console.log(`Voter number ${voter} is currently voting`);
}
 */

// ? Looping Arrays, Breaking and Continuing
// const populations = [333, 1411, 218, 168];
// const percentages2 = [];

// function percentageOfWorld1(population) {
// 	return (population / 7900) * 100;
// }

// for (i = 0; i < populations.length; i++) {
// 	// данну строку с переменной можно не использовать, а сразу пушить вызов функции в массив
// 	// вот так percentages2.push(percentageOfWorld1(populations[i]));
// 	const per = percentageOfWorld1(populations[i]);
// 	percentages2.push(per);
// }
// console.log(percentages2);

// ? Looping Backwards and Loops in Loops
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
// 	for (let y = 0; y < listOfNeighbours[i].length; y++) {
// 		console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
// 	}
// }

const populations = [333, 1411, 218, 168];
// const percentages3 = [];

// function percentageOfWorld1(population) {
// 	return (population / 7900) * 100;
// }

// let i = 0;
// while (i < populations.length) {
// 	const per = percentageOfWorld1(populations[i]);
// 	percentages3.push(per);
// 	i++;
// }
// console.log(percentages3);

// * challenge3

// const calcAvarage = function (arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return sum / arr.length;
// };
// console.log(calcAvarage(populations));

// * challenge4

let test = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
	let testStr = ''; // преобразует массив в строку
	let day = 0;
	for (let i = 0; i < arr.length; ++i) {
		day = i + 1;
		testStr += `... ${arr[i]}°C in ${day} day `;
	}
	console.log(`${testStr} ...`);
};
printForecast(test);

// let arr = ['apple', 'banana', 'cherry', 'date'];
// let newArr = arr.join(''); // объединяем элементы массива в одну строку
// newArr = newArr.replace(/[^\w\s]/g, ''); // заменяем все символы, кроме букв и цифр, на пустую строку
// console.log(newArr); // выводим объединенную строку в консоль
