const removeDuplicates = (str) => {
  const set = new Set();
  [...str].forEach(char => set.add(char));
  return [...set].join('');
}

console.log(removeDuplicates("aaxbbcccdef"));
