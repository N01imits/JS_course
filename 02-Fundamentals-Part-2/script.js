// function describeCountry(country, population, capitalCity) {
// 	return `${country} has ${population} millions people and its capital city is ${capitalCity}`;
// }

// const descriptionRussia = describeCountry("Russia", 145, "Moscow");
// const descriptionArgentina = describeCountry("Argentina", 46, "Buenos Aires");
// const describeDenmark = describeCountry("Denmark", 0.6, "Copenhagen");
// console.log(`${descriptionRussia},
// ${descriptionArgentina},
// ${describeDenmark}`);

// ? function Declarations
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

// ? function Expressions
const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100;
};

const percRussia = percentageOfWorld1(145);
const percDenmark = percentageOfWorld1(0.6);
const percArgentina = percentageOfWorld1(46);
console.log(percRussia, percDenmark, percArgentina);
