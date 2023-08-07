function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} millions people and its capital city is ${capitalCity}`;
}

const descriptionRussia = describeCountry("Russia", 145, "Moscow");
const descriptionArgentina = describeCountry("Argentina", 46, "Buenos Aires");
const describeDenmark = describeCountry("Denmark", 0.6, "Copenhagen");
console.log(`${descriptionRussia},
${descriptionArgentina},
${describeDenmark}`);
