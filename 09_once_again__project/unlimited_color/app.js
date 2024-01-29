// in the below method i try to generate color by rgb values

// document.getElementById('start').addEventListener('click', () => {
//   const body = document.querySelector('body');
//   const start = function () {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//   };
//   const toStop = setInterval(start, 1000);
//   document.getElementById('stop').addEventListener('click', () => {
//     clearInterval(toStop);
//   });
// });


// now i try to generate color by hex-Code

// generate color

//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);