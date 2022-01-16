let porsches = [
	{
		generation: "911",
		"air cooled": true,
		"production start": 1963,
		"production end": 1973,
	},
	{
		generation: "930",
		"air cooled": true,
		"production start": 1974,
		"production end": 1989,
	},
	{
		generation: "964",
		"air cooled": true,
		"production start": 1989,
		"production end": 1994,
	},
	{
		generation: "993",
		"air cooled": true,
		"production start": 1995,
		"production end": 1998,
	},
	{
		generation: "996",
		"air cooled": false,
		"production start": 1974,
		"production end": 1989,
	},
	{
		generation: "992",
		"air cooled": false,
		"production start": 2020,
		"production end": "-",
	},
];

let bmws = [];

const isAirCooled = function (porsche) {
	if (porsche["air cooled"] == true) {
		return "Indeed";
	} else {
		return "No";
	}
};

console.log(isAirCooled(porsches[0]));

// default value
function multiply(a, b = 1) {
	return a * b;
}
console.log(multiply(5, 4));
console.log(multiply(5, undefined));

// time and date
let message = document.getElementById("message");

let container = document.getElementById("container");

function prettyDate(day, dayNumber, month, year) {
	const note = `Hello. Today is ${day}, ${month} ${dayNumber}, ${year}`;
	return note;
}

function prettyTime(newTime, ampm) {
	const tell = `The time is approximately ${newTime} ${ampm}`;
	return tell;
}
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let dayNumber = d.getDate();
let year = d.getFullYear();
let time = d.toLocaleTimeString();
let newTime = time.substring(0, 4);
let ampm = time.slice(8, 10);

console.log(prettyDate(day, dayNumber, month, year));
console.log(prettyTime(newTime, ampm));

container.innerHTML =
	prettyDate(day, dayNumber, month, year) + "<br>" + prettyTime(newTime, ampm);

// simple destructuring
let a, b, rest;
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });

// Array Destructuring
const books = ["fiction", ["horror", "literary"], "science"];

const [fiction, [horror, literary], science] = books;

console.log(fiction);
console.log(horror);
console.log(literary);
console.log(science);

// Object Destructuring
const Student = {
	thename: "Joe",
	university: "MIT",
	studentInfo: {
		studentid: 555,
	},
};

const {
	thename,
	university,
	studentInfo: { studentid },
} = Student;

console.log(thename);
console.log(university);
console.log(studentid);

// function destructuring
function f() {
	return [1, 2, 3, 4];
}

const [g, h] = f();

console.log(`g equals ${g}`);
console.log(`h equals ${h}`);

// function destructuring cont
const user = {
	id: 209,
	firstName: "peter",
	lastName: "parker",
	age: 19,
};

function userId({ firstName }) {
	return firstName;
}

console.log(userId(user));

// nested object and array destructuring
const person = {
	firstName: "blake",
	lastName: "beckstrom",
	occupation: "student",
	age: 23,
	education: {
		undergrad: "harvard university",
		"graduate school": "princeton university",
		certifications: [
			"cornell web design and development",
			"mit full stack software developer",
		],
	},
	experience: [
		"front end web developer",
		"personal trainer",
		"marketing",
		"real estate broker",
	],
};

const {
	firstName,
	lastName,
	occupation,
	age,
	education,
	education: {
		undergrad,
		grad,
		certifications,
		certifications: [cert1, cert2],
	},
	experience,
	experience: [exp1, exp2, exp3, exp4],
} = person;

console.log(`nested destructuring: nested array --> ${experience}`);
console.log(`nested destructuring: double nested array --> ${exp2}`);

// spread and rest
let numbers = [1, 2, 3, 4, 5];
// rest
let [first, ...restOfNumbers] = numbers;
console.log(first);
console.log(restOfNumbers);
// spread
let [apple, orange, banana, kiwi, pineapple] = numbers;
console.log(kiwi);

// utilizing spread
let vegtables = ["asparagus", "spinach", "broccoli"];
let vegtablesCopy = vegtables;
vegtablesCopy[1] = "kale";
console.log(vegtablesCopy);
console.log(vegtables);
// notice how both lists have changed
// using spread to fix this
let years = [2000, 2001, 2002, 2003];
let yearsCopy = [...years];
yearsCopy[1] = 3001;
console.log(yearsCopy);
console.log(years);
// notice how the lists are different

// merging arrays
let l1 = [1, 2, 3];
let l2 = [4, 5, 6];
let newList = [l1, l2];
console.log(newList);
let newList2 = [...l1, ...l2];
console.log(newList2);

// object literals
const aa = "one";
const bb = "two";
const objectAB = { aa: aa, bb: bb };
console.log(objectAB.bb);

const objectAB2 = { aa, bb };
console.log(objectAB2.bb);

// arrow functions
function greeting() {
	return "Hello";
}
console.log(greeting());

var greeeting = () => "Hello";
console.log(greeting());

var add = (a, b) => a + b;
console.log(add(2, 6));

// arrow callbacks
var things = ["thingOne", "thingTwo", "thingThree"];

var output = things.map(function (label) {
	return label.length;
});
console.log(output);

var output = things.map((label) => label.length);
console.log(output);

// modules
import { newUser } from "./user.js";
const newStudent = newUser("peter parker", 18);
newStudent.printName();
newStudent.printAge();

const block = document.getElementById("block");

const newText = `${newStudent.name} is ${newStudent.age} years old`;

block.innerHTML = newText;

// function scope
function userInfo() {
	var age = 20;
	return age;
}
console.log(userInfo());

// closure
function outer() {
	var counter = 1;

	function inner() {
		console.log(counter);
		counter++;
	}

	return inner;
}

var inner = outer();
inner();
inner();
inner();
