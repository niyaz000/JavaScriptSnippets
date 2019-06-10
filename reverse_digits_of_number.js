const reverseDigits = (n) => {
	return parseInt([...n.toString()].reverse().join(''));
}

console.log(reverseDigits(12345));
