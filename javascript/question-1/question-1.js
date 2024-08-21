const reverseString = (s) => {
  const reverse = s.split("").reverse().join("");
  return reverse;
}

console.log(reverseString('aabbcceedd'));