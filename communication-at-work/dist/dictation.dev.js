"use strict";

var words = {
  "новый выпуск": "update",
  "хорошо": "well",
  "общительный": "outgoing",
  "кто-нибудь": "anyone",
  "что-нибудь": "anything",
  "надежный": "reliable",
  "глупый, тупой": "stupid",
  "организованный": "organized",
  "быстрый, скорый": "fast",
  "трудный, утомительный, тяжелый": "hard",
  "робкий, стеснительный": "shy",
  "достойный, добропорядочный": "good",
  "для, ради": "for",
  "удивляться, дивиться": "wonder",
  "заставать врасплох": "surprise",
  "беспокоиться, волноваться": "worry",
  "говорить, сказать, произносить": "say",
  "причина": "reason",
  "рассказывать, рассказать": "tell",
  "добавочный, дальнейший": "further",
  "ожидать, надеяться, предполагать": "expect",
  "наем, прокат": "hire",
  "честный": "honest",
  "пункт, параграф, статья": "item",
  "с, начиная с, с тех пор как": "since",
  "суммировать, подводить итог": "summarize",
  "повестка дня": "agenda",
  "амбициозный": "ambitious",
  "умный, сметливый": "clever"
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
    popupMessage.textContent = 'Правильно!';
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