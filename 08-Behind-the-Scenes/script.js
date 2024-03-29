'use strict';

// function calcAge(birthYear) {
// 	const age = 2023 - birthYear;

// 	function printAge() {
// 		let output = `${firstName}, You are ${age}, born in ${birthYear}`; // здесь firstName будет выводить Ilya
// 		// тк функция идет по scope chain и находит переменную в глобальной области видимости
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			// создание новой переменной с одинаковым именем и с внешней области видимости
// 			const firstName = 'Jonas'; // переменная в блоке перебивает переменную глобальную
// 			// тк JS ищет сначала переменную в блоке, если не находит то переходит выше по scope chain
// 			const str = `Oh, you're a millenial, ${firstName}`;
// 			console.log(str);
// 			function add(a, b) {
// 				return a + b;
// 			}

// 			// Переназначение пересенной с внешней областью видимости
// 			output = 'NEW1!';

// 			// const output = 'NEW VAR';
// 		}
// 		// add(2, 3);
// 		console.log(millenial);
// 		console.log(output);
// 	}

// 	printAge();

// 	return age;
// }

// const firstName = 'Ilya';
// calcAge(1995);

// Переменные
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Ilya';
// let job = 'student';
// const year = 1999;

// Функции
// console.log(addDecl(1, 2));
// console.log(addExpr(1, 2)); // при таком вызове var принимает значение undefined
// console.log(addArrow(1, 2)); // при таком вызове var принимает значение undefined

// function addDecl(a, b) {
// return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) deleteShopCard();

// var numProducts = 10;

// function deleteShopCard() {
// 	console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.z);
// console.log(x === window.y);

// console.log(this);

// const calcAge = function (birthYear) {
// 	console.log(2037 - birthYear);
// };

// calcAge(1999);

// const calcAgeArrow = birthYear => {
// 	console.log(2037 - birthYear);
// 	console.log(this);
// };
// calcAgeArrow(1999);

// const ilya = {
// 	name: 'Ilya',
// 	year: 1999,
// 	calcAge: function () {
// 		console.log(this); // выведет объект
// 		console.log(2023 - this.year);
// 	},
// };
// ilya.calcAge();

// const den = {
// 	year: 1990,
// };
// den.calcAge = ilya.calcAge;
// den.calcAge();

// const f = ilya.calcAge; // скопировали метод из объекта ilya
// f(); // undefined

// var firstName = 'Ivan';
// объект ниже - не блочный элемент, поэтому стрелочная функция берез this из глобального окружения
// const ilya = {
// firstName: 'Ilya',
// year: 1999,
// calcAge: function () {
// console.log(this); // выведет объект
// console.log(2023 - this.year);

// решение №1(до выхода ES6)
// const self = this; // сохраняем объект в переменную
// const isMillenial = function () {
// 	console.log(self);
// 	console.log(self.year >= 1981 && self.year <= 1996);
// };
// isMillenial();

// решение №2
// 	const isMillenial = () => {
// 		console.log(this);
// 		console.log(this.year >= 1981 && this.year <= 1996);
// 	};
// 	isMillenial();
// },
// 	greet: function () {
// 		console.log(this); // глобальный объект window
// 		console.log(`Hey ${this.firstName}`);
// 	},
// };

// ilya.greet();
// ilya.calcAge();

// // ключевое слово Аргументы
// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// // addExpr(1, 2);
// // addExpr(1, 2, 3, 4);
// var addArrow = (a, b) => {
// 	console.log(arguments);

// 	return a + b;
// };
// function addDecl(a, b) {
// 	console.log(this);
// 	return a + b;
// }

// примитивные значения
let lastName = 'Belyakov';
let oldLastName = lastName;
lastName = 'Ivanov';
console.log(lastName);
console.log(oldLastName);

//ссылочные типы
const jessica = {
	firstName: 'Jessica',
	lastName: 'Will',
	age: 23,
	family: ['Ilya', 'Vasya'],
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Notwill';
console.log(jessica);

// копирование объектов
const jessicaCopy = Object.assign({}, jessica);
console.log(jessicaCopy);
jessicaCopy.age = 24;

jessicaCopy.family.push('Ivan');
console.log(jessica);
console.log(jessicaCopy);
