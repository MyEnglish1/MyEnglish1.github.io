"use strict";

var words = {
  'покидать, уезжать': 'leave',
  'чистить, очищать': 'clean',
  'присматривать, присмотреть': 'watch',
  'мыть': 'wash',
  'назад': 'ago',
  'ездить, ехать ': 'drive',
  'приводить, доставлять': 'bring',
  'вор': 'thief',
  'убивать': 'murder',
  'где-то, где-нибудь, ': 'somewhere',
  'кто-нибудь, кто-то': 'someone',
  'кое-что, что-нибудь,': 'something',
  'костер': 'campfire',
  'тропа': 'trail',
  'волк': 'wolf',
  'убивать, лишать жизни': 'kill',
  'полиция': 'police',
  'воровать, красть': 'steal',
  'рюкзак': 'backpack',
  'медведь': 'bear',
  'сапоги': 'boot',
  'коттедж': 'cabin',
  'олень': 'deer',
  'змея': 'snake',
  'палатка': 'tent',
  'звонить, ': 'call',
  'отглаженный': 'iron',
  'вчера': 'yesterday',
  'арестовывать, задерживать': 'arrest',
  'преступление, правонарушение': 'crime'
};
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