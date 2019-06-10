const getDuplicates = (str) => {
	const array = [...str];
	return array.filter((char, index) => array.indexOf(char, index + 1) != -1).join('');
}

console.log(getDuplicates("applepeach"));
