const btnMovile = document.querySelector('#btn_movile');
const menuMovile = document.querySelector('#menu_movile');

function showMenuMovile() {
  const isMenuMovileHiden = menuMovile.classList.contains('hidden');

  if (!isMenuMovileHiden) {
    menuMovile.classList.add('hidden');
  } else {
    menuMovile.classList.toggle('hidden');
  }
}

btnMovile.addEventListener('click', showMenuMovile);
