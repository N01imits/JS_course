// * JS fundamentals part 1
// ? Values and Variables
// let js = "amazing";
// if (js === "amazing") console.log("JS is FUN!");
// console.log(30 + 49 + 120 - 230);

// let firstName = "Ilya";
// console.log(firstName);

// const country = "Россия";
// const continent = "Евразия";
// let populationRussia = 33;
// console.log(country, continent, populationRussia);
// console.log(country);
// console.log(continent);
// console.log(populationRussia);

// ? data types and let, const, var
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 2123);
// console.log(typeof "Ilya");

// javascriptIsFun = "Yes";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let isIsland = "Россия";
// let language;
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// language = "Русский язык";

// ? Basic operators
// console.log(populationRussia / 2);
// populationRussia++;
// console.log(populationRussia);
// let populationFinland = 6;
// console.log(populationRussia > populationFinland);
// let averagePopulationCountry = 33;
// console.log(averagePopulationCountry > populationRussia);
// let description =
// 	country +
// 	" в " +
// 	continent +
// 	" и " +
// 	populationRussia +
// 	" миллионов человек разговаривают на " +
// 	language;
// console.log(description);

// ? strings and template literals
// description = `${country} находится на континете ${continent} и ${populationRussia}
// миллионов человек разговаривают на
// ${language}`;
// console.log(description);

// ? if/else statements
// let averagePopulation = 33;
// if (populationRussia > averagePopulation) {
// 	console.log(`Население России ${populationRussia} миллиона(ов) человек, это выше среднего`);
// } else if (populationRussia < 33) {
// 	console.log(`Население России ниже среднего на ${33 - populationRussia} миллионов`);
// } else {
// 	console.log(`население России равно среднему значению ${populationRussia}`);
// }

// ? Type Conversion and Coercion
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// ? Equality Operators: == vs. ===
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours === 1) {
// 	console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
// 	console.log(`More than 1 border`);
// } else {
// 	console.log(`No borders`);
// }

// ? Logical Operators
// const country = "Португалия";
// let population = 11;
// let language = "английский";
// const isIsland = false;

// if (language === "английский" && population < 50 && !isIsland) {
// 	console.log(`${country}, Вам идеально подходит`);
// } else {
// 	console.log(`${country} не соответсвуем вашим критериям 😥`);
// }

// ? The switch Statement
// let day = "friy";

// if (day === "monday") {
// 	console.log(1);
// 	console.log(2);
// } else if (day === "tuesday") {
// 	console.log(3);
// } else if (day === "wednesday" || day === "thurday") {
// 	console.log(4);
// } else if (day === "friday") {
// 	console.log(5);
// } else if (day === "saturday" || day === "sunday") {
// 	console.log(6);
// } else {
// 	console.log("вы ввели неверный день");
// }

let language = "1";

switch (language) {
	case "chinese":
	case "mandarian":
		console.log("MOST number of native speakers!");
		break;
	case "spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "english":
		console.log("3rd place");
		break;
	case "hindi":
		console.log("Number 4");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
}
