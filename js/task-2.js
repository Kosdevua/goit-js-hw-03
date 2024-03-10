// Задача 2. Композиція масивів

function makeArray(firstArray, secondArray, maxLength) {
  let thirdArr = firstArray.concat(secondArray);
  console.log(thirdArr.length);
  if (thirdArr.length > maxLength) {
    return thirdArr.slice(0, maxLength);
  } else {
    return thirdArr;
  }
}

console.log(
  makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)
); // ["Mango", "Poly", "Ajax"]
console.log(
  makeArray(
    ['Mango', 'Poly', 'Houston'],
    ['Ajax', 'Chelsea'],
    4
  )
); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(
  makeArray(
    ['Mango'],
    ['Ajax', 'Chelsea', 'Poly', 'Houston'],
    3
  )
); // ["Mango", "Ajax", "Chelsea"]
console.log(
  makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)
); // ["Earth", "Jupiter"]
console.log(
  makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)
); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(
  makeArray(
    ['Earth', 'Jupiter'],
    ['Neptune', 'Uranus', 'Venus'],
    0
  )
); // []
