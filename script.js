'use strict';

document.querySelector('.toggle').addEventListener('click', function () {
  document.querySelector('.toggle').style.display = 'none';
  document.querySelector('#toggle').style.display = 'block';
  document.querySelector('#toggle').style.fill = '#e0aae0';
  document.querySelector('#toggle').style.stroke = '#e0aae0';
  // bright.style.fill = '#e0aae0';
  document.querySelector('.container').style.backgroundColor = '#2c202c';
  document.querySelector('.cta').style.backgroundColor = '#f8ecf8';
  document.querySelector('.cta').style.border = '2px solid #e0aae0';
  document.querySelector('.cta').style.color = '#2c202c';
  document.querySelector('.small-content-box').style.backgroundColor =
    '#584058';
  document.querySelector('body').style.color = '#e0aae0';
  document.querySelector('.toggle').style.fill = '#e0aae0';
  document.querySelector('.toggle').style.stroke = '#e0aae0';

  const links = document.querySelectorAll('.profileLink');
  links.forEach(link => {
    link.style.color = '#f8ecf8';
  });

  // CONVERT TO AN ARRAY AS ABOVE OR USE LOOP BELOW
  // for (let i = 0; i < links.length; i++) {
  //   links[i].style.color = "#f8ecf8";
  // }
});
document.querySelector('#toggle').addEventListener('click', function () {
  document.querySelector('.toggle').style.display = '#161016';
  document.querySelector('#toggle').style.display = 'none';
  document.querySelector('#dark').style.display = 'block';
  document.querySelector('#dark').style.fill = '#161016';
  document.querySelector('#dark').style.stroke = '#161016';
  document.querySelector('.cta').style.border = '2px solid #2c202c';
  document.querySelector('.cta').style.color = '#161016';

  document.querySelector('.small-content-box').style.backgroundColor =
    '#e0aae0';
  document.querySelector('.container').style.backgroundColor = '#f8ecf8';
  document.querySelector('body').style.color = '#161016';

  const links = document.querySelectorAll('.profileLink');
  links.forEach(link => {
    link.style.color = '#161016';
  });
});

// const numberOfString = function (str) {
//   return str.split('').length;
// };
// const value = numberOfString('this is a string');
// console.log(value);
