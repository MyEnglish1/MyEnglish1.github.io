"use strict";

var words = {
  update: "новый выпуск",
  well: "хорошо",
  outgoing: "общительный",
  anyone: "кто-нибудь",
  anything: "что-нибудь",
  reliable: "надежный",
  stupid: "глупый, тупой",
  organized: "организованный",
  fast: "быстрый, скорый",
  hard: "трудный, утомительный, тяжелый",
  shy: "робкий, стеснительный",
  good: "достойный, добропорядочный",
  "for": "для, ради",
  wonder: "удивляться, дивиться",
  surprise: "заставать врасплох",
  worry: "беспокоиться, волноваться",
  say: "говорить, сказать, произносить",
  reason: "причина",
  tell: "рассказывать, рассказать",
  further: "добавочный, дальнейший",
  expect: "ожидать, надеяться, предполагать",
  hire: 'наем, прокат',
  honest: "честный",
  item: "пункт, параграф, статья",
  since: "с, начиная с, с тех пор как",
  summarize: "суммировать, подводить итог",
  agenda: "повестка дня",
  ambitious: "амбициозный",
  clever: "умный, сметливый"
};
var correctCount = 0; // Счетчик правильных ответов

var wrongCount = 0; // Счетчик неправильных ответов

function updateScore() {
  var correctDiv = document.querySelector('.lesson__header_right');
  var wrongDiv = document.querySelector('.lesson__header_wrong');
  correctDiv.textContent = correctCount; // Обновляем счетчик правильных ответов

  wrongDiv.textContent = wrongCount; // Обновляем счетчик неправильных ответов
}

function checkAnswer(div, selectedValue) {
  var popup = document.getElementById('popup');
  var popupMessage = document.getElementById('popupMessage');

  if (selectedValue === words[currentKey]) {
    correctCount++; // Увеличиваем счетчик правильных ответов

    popupMessage.textContent = 'Правильно!'; // Сообщение о правильном ответе

    popup.style.display = 'block';
    setTimeout(function () {
      popup.style.display = 'none';
      updateScore(); // Обновляем счетчики

      updateContent(); // Загружаем новые слова после показа всплывающего окна
    }, 1000); // Скрыть popup через 1 секунду

    div.style.backgroundColor = "";
    setTimeout(function () {
      return div.style.backgroundColor = "";
    }, 800);
  } else {
    wrongCount++; // Увеличиваем счетчик неправильных ответов

    popupMessage.textContent = 'Неправильно!'; // Сообщение о неправильном ответе

    popup.style.display = 'block';
    setTimeout(function () {
      popup.style.display = 'none';
      updateScore(); // Обновляем счетчики
    }, 1000); // Скрыть popup через 1 секунду

    div.style.backgroundColor = "";
    setTimeout(function () {
      return div.style.backgroundColor = "";
    }, 500);
  }
} // Initial call to set content and update the score


updateContent();
updateScore(); // Обновляем начальные счетчики
//   const keys = Object.keys(words);
//   let currentKey;
//   function getRandomElement(array) {
//     return array[Math.floor(Math.random() * array.length)];
//   }
//   function updateContent() {
//     currentKey = getRandomElement(keys);
//     const correctValue = words[currentKey];
//     const enDiv = document.querySelector('.stages__item_content.stages__item_content_w100.stages__item_content_en');
//     enDiv.textContent = currentKey;
//     const allBrDivs = document.querySelectorAll('.stages__item_content.stages__item_content_w100.stages__item_content_br');
//     // Set background color to #aaa for all designated divs
//     // allBrDivs.forEach(div => div.style.backgroundColor = "#aaa");
//     const randomIndex = Math.floor(Math.random() * allBrDivs.length);
//     allBrDivs[randomIndex].textContent = correctValue;
//     const values = Object.keys(words).filter(key => key !== currentKey).map(key => words[key]);
//     allBrDivs.forEach((div, index) => {
//         if (index !== randomIndex) {
//             div.textContent = getRandomElement(values);
//         }
//         div.onclick = () => checkAnswer(div, div.textContent); // Pass the div to checkAnswer
//     });
//   }
//   function checkAnswer(div, selectedValue) {
//     if (selectedValue === words[currentKey]) {
//         setTimeout(updateContent, 1000); // Load new key and values after delay
//         div.style.backgroundColor = "#008000"; 
//         setTimeout(() => div.style.backgroundColor = "", 800); // Reset background after 1 sec
//     } else {
//         div.style.backgroundColor = "#ff0000"; // Set background to red
//         setTimeout(() => div.style.backgroundColor = "", 500); // Reset background after 1 sec
//     }
//   }
//   function checkAnswer(div, selectedValue) {
//     const popup = document.getElementById('popup');
//     const popupMessage = document.getElementById('popupMessage');
//     if (selectedValue === words[currentKey]) {
//         popupMessage.textContent = '';
//         popup.style.display = 'block';
//         setTimeout(() => {
//             popup.style.display = 'none';
//             updateContent(); // Загружаем новые слова после показа всплывающего окна
//         }, 1000); // Скрыть popup через 1 секунду
//         div.style.backgroundColor = ""; 
//         setTimeout(() => div.style.backgroundColor = "", 800); 
//     } else {
//         div.style.backgroundColor = "";
//         setTimeout(() => div.style.backgroundColor = "", 500);
//     }
// }
//   // Initial call to set content
//   updateContent();