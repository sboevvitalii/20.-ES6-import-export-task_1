import { getRandomColor } from './utils';

export function initApp() {
  const changeBtn = document.createElement('button');
  changeBtn.classList.add('button');
  changeBtn.textContent = 'Изменить цвет страницы';


  document.body.append(changeBtn)
  changeBtn.addEventListener("click", function () {
    let colorBg = getRandomColor();
    document.body.style.backgroundColor = `${colorBg}`;
  });
}

