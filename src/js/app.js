/* eslint-disable no-unused-vars */
function randomPointX(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
}

function randomPointY(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getPoint() {
  const arr = [0, 1, 2, 3];
  const i = randomPointX(arr);
  const j = randomPointY(0, 3);
  return (document.getElementById('table').childNodes[0].childNodes[i].cells[j]);
}

function setPicture() {
  const image = document.createElement('img');
  image.src = './goblin.png';
  image.style.width = '50%';
  image.style.height = 'auto';

  let end;

  const timerId = setInterval(() => {
    const point = getPoint();
    point.appendChild(image);
    end = point;
  }, 1000);
}

getPoint();
setPicture();
