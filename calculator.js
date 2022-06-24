let digit_a = prompt('Enter First Number');
let digit_b = prompt('Enter Second Number');

operator = prompt(
  'Choose an operator' +
  'add = 1' +
  'subtract = 2' +
  'multiply = 3' +
  'divide = 4'
  )

if (operator == 1) {
  return add()
}
if (operator == 2) {
  return subtract()
}
if (operator == 3) {
  return multiply()
}
if (operator == 4) {
  return divide()
}

const add = (digit_a, digit_b) => digit_a + digit_b;
const subtract = (digit_a, digit_b) => digit_a - digit;
const multiply = (digit_a, digit_b) => digit_a * digit_b;
const divide = (digit_a, digit_b) => digit_a / digit_b;