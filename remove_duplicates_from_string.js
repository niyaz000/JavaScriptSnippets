const removeDuplicates = (str) => {
  const strArray = [...str];
  return strArray.filter((char, index) => str.indexOf(char, index + 1) == -1);
}

console.log(removeDuplicates("applepeach"));
