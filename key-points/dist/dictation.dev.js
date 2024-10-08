"use strict";

var words = {
  'жениться, выходить замуж': 'marry',
  'продвижение по службе': 'promotion',
  'выйти на пенсию': 'retire',
  'пенсия': 'retirement',
  'вне дома, за рубежом': 'abroad',
  'условленная встреча': 'appointment',
  'основа, база': 'background',
  'кандидат': 'candidate',
  'требующий напряжения сил': 'challenging',
  'образование': 'education',
  'опыт, опыт работы': 'experience',
  'впечатляющий, выразительный': 'impressive',
  'шанс, возможность': 'opportunity',
  'позиция': 'position',
  'достоинство, сильная сторона': 'strength',
  'слабость': 'weakness',
  'рождение, роды': 'birth',
  'родиться': 'born',
  'мертвый, умерший': 'dead',
  'умереть': 'die',
  'оканчивать учебное заведение': 'graduate',
  'замужество,  свадьба': 'marriage',
  'команда': 'team',
  'скучать по кому-либо': 'miss',
  ' беременная': 'pregnant',
  'развод, разведенный': 'divorced',
  'градус, диплом': 'degree',
  'переезжать, переселяться': 'move',
  'резюме': 'resume',
  'собеседование': 'interview'
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