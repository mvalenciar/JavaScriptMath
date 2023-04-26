const data = document.querySelector('#data');
const enteredData = document.querySelector('#entered_data');
const enterButton = document.querySelector('#enter_button');

const dataSet = [];

function fillDataSet() {
  console.log('click');
  dataSet.push(data.value);
  enteredData.innerText = dataSet;
}

enterButton.addEventListener('click', fillDataSet);
