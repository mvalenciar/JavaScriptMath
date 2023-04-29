const data = document.querySelector('#data');
const enteredData = document.querySelector('#entered_data');
const enterButton = document.querySelector('#enter_button');
const averageField = document.querySelector('#average');
const medianField = document.querySelector('#median');
const fashionField = document.querySelector('#fashion');
const calculateButton = document.querySelector(
  '#statistical_calculations_button',
);

const dataSet = [];
let orderedDataSet = [];

function fillDataSet() {
  if (data.value === '') {
    alert('El campo de datos esta vacío');
  } else {
    dataSet.push(data.value);
    enteredData.innerText = dataSet;
    data.value = '';
  }
}

function sortDataList() {
  function compare(accumulatedValue, newValue) {
    if (accumulatedValue > newValue) {
      return 1;
    }
    if (accumulatedValue === newValue) {
      return 0;
    }
    if (accumulatedValue < newValue) {
      return -1;
    }
  }
  orderedDataSet = dataSet.sort(compare);
}

function calculateAverage() {
  let sumaDataSet = 0;
  for (let i = 0; i < dataSet.length; i++) {
    sumaDataSet += Number(dataSet[i]);
  }
  const average = Number((sumaDataSet / dataSet.length).toFixed(2));
  return average;
}

function calculateMedian() {
  let median;
  let indexMedian1;
  let indexMedian2;

  sortDataList();

  if (orderedDataSet.length % 2 !== 0) {
    indexMedian1 = Math.round(orderedDataSet.length / 2);
    median = orderedDataSet[indexMedian1 - 1];
  } else {
    indexMedian1 = orderedDataSet.length / 2;
    indexMedian2 = indexMedian1 - 1;
    median =
      Number(orderedDataSet[indexMedian1]) +
      Number(orderedDataSet[indexMedian2]);
    median /= 2;
  }

  return median;
}

function calculateFashion() {
  const countList = {};
  for (let i = 0; i < orderedDataSet.length; i++) {
    const element = orderedDataSet[i];
    if (countList[element]) {
      countList[element] += 1;
    } else {
      countList[element] = 1;
    }
  }

  const arrayCountList = Object.entries(countList);

  function compare(accumulatedValue, newValue) {
    if (accumulatedValue[1] > newValue[1]) {
      return 1;
    }
    if (accumulatedValue[1] === newValue[1]) {
      return 0;
    }
    if (accumulatedValue[1] < newValue[1]) {
      return -1;
    }
  }
  const orderedArrayCountList = arrayCountList.sort(compare);

  return orderedArrayCountList[orderedArrayCountList.length - 1][0];
}

function fillStatisticalFields() {
  averageField.value = calculateAverage();
  medianField.value = calculateMedian();
  fashionField.value = calculateFashion();
}

enterButton.addEventListener('click', fillDataSet);
calculateButton.addEventListener('click', fillStatisticalFields);
