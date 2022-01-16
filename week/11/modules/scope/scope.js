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

// loop with timer
for (var i = 1; i < 10; i++) {
	setTimeout(function () {
		console.log(`First: ${i}`);
	}, 1000);
}

// loop with closure
for (var i = 1; i < 10; i++) {
	(function (x) {
		setTimeout(function () {
			console.log("Second:" + x);
		}, 1000);
	})(i);
}

// loop with block scope
for (let i = 1; i < 10; i++) {
	setTimeout(function () {
		console.log(`Third: ${i}`);
	}, 1000);
}

//global
console.log(p);
var p = 0;

//block scope
// console.log(h);
// let h = 0;

// learing clsure myself

function outside() {
	var aVar = "var";
	let aLet = "let";
	const aConst = "const";

	function inside() {
		console.log(aVar);
		console.log(aLet);
		console.log(aConst);
	}
	return inside();
}

outside();
