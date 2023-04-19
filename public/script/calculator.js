const calculatorScreen = document.querySelector('#calculator_screen');
const calculatorBtn7 = document.querySelector('#calculatorBtn7');
const calculatorBtn8 = document.querySelector('#calculatorBtn8');
const calculatorBtn9 = document.querySelector('#calculatorBtn9');
const calculatorBtnSuma = document.querySelector('#calculatorBtnSuma');
const calculatorBtn4 = document.querySelector('#calculatorBtn4');
const calculatorBtn5 = document.querySelector('#calculatorBtn5');
const calculatorBtn6 = document.querySelector('#calculatorBtn6');
const calculatorBtnResta = document.querySelector('#calculatorBtnResta');
const calculatorBtn1 = document.querySelector('#calculatorBtn1');
const calculatorBtn2 = document.querySelector('#calculatorBtn2');
const calculatorBtn3 = document.querySelector('#calculatorBtn3');
const calculatorBtnMultiplicacion = document.querySelector(
  '#calculatorBtnMultiplicacion',
);
const calculatorBtn0 = document.querySelector('#calculatorBtn0');
const calculatorBtnReset = document.querySelector('#calculatorBtnReset');
const calculatorBtnDivision = document.querySelector('#calculatorBtnDivision');
const calculatorBtnResultado = document.querySelector(
  '#calculatorBtnResultado',
);
let resultado;

// calculator config
calculatorBtn7.addEventListener('click', () => {
  calculatorScreen.textContent += '7';
});

calculatorBtn8.addEventListener('click', () => {
  calculatorScreen.textContent += '8';
});

calculatorBtn9.addEventListener('click', () => {
  calculatorScreen.textContent += '9';
});

calculatorBtnSuma.addEventListener('click', () => {
  calculatorScreen.textContent += '+';
});

calculatorBtn4.addEventListener('click', () => {
  calculatorScreen.textContent += '4';
});

calculatorBtn5.addEventListener('click', () => {
  calculatorScreen.textContent += '5';
});

calculatorBtn6.addEventListener('click', () => {
  calculatorScreen.textContent += '6';
});

calculatorBtnResta.addEventListener('click', () => {
  calculatorScreen.textContent += '-';
});

calculatorBtn1.addEventListener('click', () => {
  calculatorScreen.textContent += '1';
});

calculatorBtn2.addEventListener('click', () => {
  calculatorScreen.textContent += '2';
});

calculatorBtn3.addEventListener('click', () => {
  calculatorScreen.textContent += '3';
});

calculatorBtnMultiplicacion.addEventListener('click', () => {
  calculatorScreen.textContent += '*';
});

calculatorBtn0.addEventListener('click', () => {
  calculatorScreen.textContent += '0';
});

calculatorBtnDivision.addEventListener('click', () => {
  calculatorScreen.textContent += '/';
});

calculatorBtnReset.addEventListener('click', () => {
  calculatorScreen.textContent = '';
});

calculatorBtnResultado.addEventListener('click', () => {
  resultado = eval(calculatorScreen.textContent);
  calculatorScreen.textContent = resultado;
});
