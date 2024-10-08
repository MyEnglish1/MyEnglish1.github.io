"use strict";

var _words;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var words = (_words = {
  'абсолютно': 'absolutely',
  'довольный, счастливый': 'delighted',
  'в любом случае': 'anyway',
  'может быть': 'maybe',
  'точно, определенно': 'definitely',
  'вероятно, наверное': 'probably',
  'house-warming': 'house-warming',
  'сумасшедший': 'crazy',
  'великолепный': 'gorgeous',
  'довольный': 'glad',
  'красивый': 'beautiful',
  'чудесный': 'wonderful',
  'туалет': 'restroom',
  'красивый, прекрасный': 'lovely',
  'принимать гостей': 'host',
  'надеяться': 'hope',
  'очень, на самом деле': 'really',
  'вкусный': 'delicious',
  'только что, прямо,': 'just',
  'вряд-ли': 'unlikely',
  'готовый': 'ready',
  'удивленный': 'surprised',
  'восхитительный': 'delightful',
  'приятный': 'enjoyable',
  'бензин, газолин': 'petrol'
}, _defineProperty(_words, "\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B\u0439", 'pleased'), _defineProperty(_words, ' вкусный', 'tasty'), _defineProperty(_words, 'дорогой', 'dear'), _words);
var currentValue;

function getRandomWord() {
  var values = Object.keys(words);
  currentValue = values[Math.floor(Math.random() * values.length)];
  document.getElementById('wordDisplay').textContent = currentValue;
}

function checkAnswer() {
  var userInput = document.getElementById('userInput').value.trim();
  var popup = document.getElementById('popup');
  var popupMessage = document.getElementById('popupMessage');
  var popupImg = document.getElementById('popupImg');

  if (userInput === words[currentValue]) {
    popupMessage.textContent = '';
    popupImg.src = 'correct-image-url.jpg'; // Замените на URL вашей картинки

    popup.style.display = 'block';
    setTimeout(function () {
      popup.style.display = 'none';
    }, 1000); // Закрываем всплывающее окно через 1 секунду

    getRandomWord();
  } else {
    alert('Неправильно! Правильный ответ: ' + words[currentValue]);
  }

  document.getElementById('userInput').value = '';
}

getRandomWord(); // let currentValue;
// function getRandomWord() {
//   const values = Object.keys(words);
//   currentValue = values[Math.floor(Math.random() * values.length)];
//   document.getElementById('wordDisplay').textContent = currentValue; // Выводим значение
// }
// function checkAnswer() {
//   const userInput = document.getElementById('userInput').value.trim();
//   if (userInput === words[currentValue]) {
//       getRandomWord(); // Получаем новое значение
//   } else {
//       alert('Неправильно! Правильный ответ: ' + words[currentValue]);
//   }
//   document.getElementById('userInput').value = ''; // Очищаем поле ввода
// }
// // Инициализируем игру
// getRandomWord(); // Получаем первое случайное значение