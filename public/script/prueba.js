const data = document.querySelector('#dato');
const btnIsert = document.querySelector('#insert');
const showData = document.querySelector('#printData');
const showModa = document.querySelector('#moda');
const btnCalc = document.querySelector('#calcular');

const dataList = [];

function printData() {
  dataList.push(data.value);
  showData.innerText = dataList;
  data.value = '';
}

function calcModa() {
  console.log(dataList);
  const listCount = {};
  for (let i = 0; i < dataList.length; i++) {
    const element = dataList[i];
    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }
  console.log(listCount);
}

btnIsert.addEventListener('click', printData);
btnCalc.addEventListener('click', calcModa);
