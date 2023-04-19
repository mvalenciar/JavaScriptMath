const btnMobile = document.querySelector('#btn_mobile');
const menuMobile = document.querySelector('#menu_mobile');
const modalCircle = document.querySelector('#modal_circle');
const modalSquare = document.querySelector('#modal_square');
const circleFigure = document.querySelector('#circle_figure');
const squareFigure = document.querySelector('#square_figure');
const btncloseModalCircle = document.querySelector('#BtnCloseModalCircle');
const btncloseModalSquare = document.querySelector('#BtnCloseModalSquare');

btnMobile.addEventListener('click', () => {
  const isMenuMobileHidden = menuMobile.classList.contains('hidden');

  // mobile menu config
  if (!isMenuMobileHidden) {
    menuMobile.classList.add('hidden');
  } else {
    menuMobile.classList.toggle('hidden');
  }
});

// circle modal config

function closeModalCircle() {
  const isModalCircleHidden = modalCircle.classList.contains('hidden');
  if (!isModalCircleHidden) {
    modalCircle.classList.add('hidden');
  }
}

function showModalCircle() {
  modalCircle.classList.add('animate__fadeIn');
  modalCircle.classList.remove('hidden');
}

btncloseModalCircle.addEventListener('click', closeModalCircle);
circleFigure.addEventListener('click', showModalCircle);

// Square Modal Config
function closeModalSquare() {
  const isModalSquareHidden = modalSquare.classList.contains('hidden');
  if (!isModalSquareHidden) {
    modalSquare.classList.add('hidden');
  }
}

function showModalSquare() {
  modalSquare.classList.add('animate__fadeIn');
  modalSquare.classList.remove('hidden');
}

btncloseModalCircle.addEventListener('click', closeModalCircle);
circleFigure.addEventListener('click', showModalCircle);
btncloseModalSquare.addEventListener('click', closeModalSquare);
squareFigure.addEventListener('click', showModalSquare);
