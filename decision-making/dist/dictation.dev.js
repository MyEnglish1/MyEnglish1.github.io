// const words = {
//   	 	'решать': 'decide',
//      	'предлагать, подсказывать': 'suggest',
//      	'выбирать': 'choose',
//      	'согласен': 'agree',
//      	'лучший, наилучший': 'better',
//      	'возбуждающий, волнующий': 'exciting',
//      	'далеко': 'far',
//      	'честный': 'honest',
//      	'команда': 'team',
//      	'сооружать, строить': 'build',
//      	'так': 'so',
//      	'наибольший': 'most',
//      	'лучший, наилучший': 'best',
//      	'самый дальний': 'farthest',
//      	'дешевый, недорогой': 'cheap',
//      	'ближний, близлежащий': 'near',
//      	'дорогой, ценный': 'expensive',
//      	'проектор, кинопроектор': 'projector',
//      	'встреча': 'meeting',
//      	'оборудование': 'facility',
//      	'отдел, департамент': 'department',
//      	'место встречи': 'venue',
//      	'презентация': 'presentation',
//      	'рекомендовать': 'recommend',
//      	'собрание, конференция': 'conference',
//      	'упоминать, ссылаться': 'mention',
//      	'обсуждать':  'discuss',
//      	'настоящий': 'true',
//   };
//   let currentValue;
//   function getRandomWord() {
//       const values = Object.keys(words);
//       currentValue = values[Math.floor(Math.random() * values.length)];
//       document.getElementById('wordDisplay').textContent = currentValue;
//   }
//   function checkAnswer() {
//       const userInput = document.getElementById('userInput').value.trim();
//       const popup = document.getElementById('popup');
//       const popupMessage = document.getElementById('popupMessage');
//       const popupImg = document.getElementById('popupImg');
//       if (userInput === words[currentValue]) {
//           popupMessage.textContent = '';
//           popupImg.src = 'correct-image-url.jpg'; // Замените на URL вашей картинки
//           popup.style.display = 'block';
//           setTimeout(() => {
//               popup.style.display = 'none';
//           }, 1000); // Закрываем всплывающее окно через 1 секунду
//           getRandomWord();
//       } else {
//           alert('Неправильно! Правильный ответ: ' + words[currentValue]);
//       }
//       document.getElementById('userInput').value = '';
//   }
//   getRandomWord();
// let currentValue;
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
"use strict";