// * JS fundamentals part 1
// ? Values and Variables
// let js = "amazing";
// if (js === "amazing") console.log("JS is FUN!");
// console.log(30 + 49 + 120 - 230);

// let firstName = "Ilya";
// console.log(firstName);

// const country = "Россия";
// const continent = "Евразия";
// let populationRussia = 147;
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
description = `${country} находится на континете ${continent} и ${populationRussia}
миллионов человек разговаривают на
${language}`;
console.log(description);
