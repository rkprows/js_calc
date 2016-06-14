function userInputs(n) {
	var first = parseFloat(document.getElementById('first_num').value)
	var second = parseFloat(document.getElementById('second_num').value)
	var result = parseFloat(document.getElementById('result').value)
	return [first, second, result]
}
var num1
var num2
var op = 0

// function num(n) {
// 	if (num1 == null) {
// 		num1 = n;
// 		console.log(num1)
// 	} else {
// 		num2 = n;
// 		console.log(num2)
// 	}
// 	return [num1, num2]
// }

function operator(choice) {
	op = choice;
}

function calc() {
	var inputs = num();
	if (op === 1){
			var output = inputs[0] + inputs[1]
			console.log(output)
	} else if (op === 2) {
			var output = inputs[0] - inputs[1]
	} else if (op === 3) {
			var output = inputs[0] * inputs [1]
	} else if (op === 4 ) { 
			if (inputs[1] === 0) {
				alert("You cannot divide by 0. Choose another number.");
				clearSecond();
			} else {
			var output = inputs[0] / inputs[1]
			}
	} else {
			var output = 'Please choose an operator'
	}
	document.getElementById('result').innerHTML = output;
}

function clearResult() {
	var first = document.getElementById('first_num')
	var second = document.getElementById('second_num')
	result.innerHTML = '';
	first.value = '';
	second.value = '';
}

function clearSecond() {
	var second = document.getElementById('second_num')
	second.value = '';
}
