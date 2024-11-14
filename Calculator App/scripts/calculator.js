let calculation = '';

function updateCalc(value) {
  calculation += value;

  document.querySelector('.js-display')
    .innerHTML = calculation;
}

function clearCalc() {
  calculation = '';

  document.querySelector('.js-display')
    .innerHTML = '';
}

function backspace() {
  calculation = document.querySelector('.js-display')
    .innerHTML = calculation.toString().slice(0, -1);
}

function calculate() {
  calculation = eval(calculation);

  document.querySelector('.js-display')
    .innerHTML = calculation;
}

function surpriseNumber(first, last) {
  const surprise = Math.floor(Math.random() * (last - first + 1) + first);

  document.querySelector('.js-display')
    .innerHTML = calculation += surprise;
}