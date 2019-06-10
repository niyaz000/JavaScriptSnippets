const sum = (n) => {
  return n.toString().split('').map(Number).reduce((total, num) => num + total, 0);
}
