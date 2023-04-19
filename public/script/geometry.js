const ratioCircle = document.querySelector('#ratio_circle');
const areaCircle = document.querySelector('#area_circle');
const perimeterCircle = document.querySelector('#perimeter_circle');
const btnCalcModalCircle = document.querySelector('#btnCalcModalCircle');
const sideSquare = document.querySelector('#side_square');
const areaSquare = document.querySelector('#area_square');
const perimeterSquare = document.querySelector('#perimeter_square');
const btnCalcModalSquare = document.querySelector('#btnCalcModalSquare');

function solutionFormulasCircle() {
  areaCircle.value = Number((Math.PI * ratioCircle.value ** 2).toFixed(2));
  perimeterCircle.value = Number((2 * Math.PI * ratioCircle.value).toFixed(2));
}

function solutionFormulasSquare() {
  areaSquare.value = sideSquare.value ** 2;
  perimeterSquare.value = sideSquare.value * 4;
}

btnCalcModalCircle.addEventListener('click', solutionFormulasCircle);
btnCalcModalSquare.addEventListener('click', solutionFormulasSquare);
