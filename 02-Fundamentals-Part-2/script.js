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
const myCountry = {
	country: "Russia",
	capital: "Moscow",
	language: "Russian",
	population: 144,
	neighbours: ["China", "Norway", "Poland", "Belarus"],
};

// console.log(myCountry);
// console.log(myCountry.population);

// * challenge
// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	age: 2023 - 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);
// console.log(
// 	`${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
// );

// ? Dot vs. Bracket Notation
console.log(
	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
	${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
