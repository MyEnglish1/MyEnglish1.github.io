"use strict";

var stagesItemContentRuElements = document.querySelectorAll('.stages__item_content_ru');
var stagesItemContentENElements = document.querySelectorAll('.stages__item_content_en');
stagesItemContentRuElements.forEach(function (element) {
  var newElement = document.createElement('div');
  newElement.classList.add('stages__item_content_img');
  newElement.innerHTML = '<img src="../img/update-alt.svg" alt="img">';
  element.insertAdjacentElement('afterend', newElement);
});
var currentPhraseKey;
var currentPhraseValue;

function loadNextPhrase() {
  var keys = Object.keys(phrases);
  var randomIndex = Math.floor(Math.random() * keys.length);
  currentPhraseKey = keys[randomIndex];
  currentPhraseValue = phrases[currentPhraseKey];
  document.querySelector('.test__phrase_ru').innerText = currentPhraseValue;
  displayWords(currentPhraseKey);
}

function displayWords(phrase) {
  var words = phrase.split(' ');
  var wrapper = document.querySelector('.test__wrapper');
  wrapper.innerHTML = ''; // Очищаем предыдущие слова
  // Случайная сортировка слов

  words.sort(function () {
    return Math.random() - 0.5;
  }).forEach(function (word) {
    var wordDiv = document.createElement('div');
    wordDiv.className = 'test__word';
    wordDiv.innerText = word;

    wordDiv.onclick = function () {
      return addWord(wordDiv, word);
    };

    wrapper.appendChild(wordDiv);
  });
}

function addWord(wordDiv, word) {
  var phraseDiv = document.querySelector('.test__phrase_en');
  phraseDiv.innerText += (phraseDiv.innerText.length > 0 ? ' ' : '') + word;
  wordDiv.remove(); // Удаляем выбранное слово из обёртки

  checkAnswer(); // Переносим проверку ответов на следующий этап
}

function checkAnswer() {
  var currentAnswer = document.querySelector('.test__phrase_en').innerText.trim(); // Проверка на полное заполнение

  if (currentAnswer.split(' ').length === currentPhraseKey.split(' ').length) {
    setTimeout(function () {
      // Используем setTimeout для отсрочки
      if (currentAnswer === currentPhraseKey) {
        alert("\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E! \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0444\u0440\u0430\u0437\u0430: \"".concat(currentPhraseKey, "\""));
        document.querySelector('.test__phrase_en').innerText = ''; // Сбрасываем ответ
      } else {
        alert("\u041D\u0435\u0432\u0435\u0440\u043D\u043E! \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0444\u0440\u0430\u0437\u0430: \"".concat(currentPhraseKey, "\""));
        document.querySelector('.test__phrase_en').innerText = ''; // Сбрасываем ответ

        displayWords(currentPhraseKey); // Повторно отображаем слова
      }

      loadNextPhrase(); // Загружаем новую фразу после алерта
    }, 100); // 100 мс задержка для лучшего UX
  }
} // Инициализация


loadNextPhrase();
$('ul.stages__tabs').on('click', 'li:not(.stages__tab_active)', function () {
  $(this).addClass('stages__tab_active').siblings().removeClass('stages__tab_active').closest('div.container').find('div.stages__content').removeClass('stages__content_active').eq($(this).index()).addClass('stages__content_active');
}); // Получаем все блоки с вариантами ответов

var answerChoices = document.querySelectorAll('.stages__answerChoice'); // Проходимся циклом по всем блокам с вариантами ответов

answerChoices.forEach(function (choice) {
  // При нажатии на блок
  choice.addEventListener('click', function () {
    // Если блок имеет класс 'correctly', задний фон становится зеленым
    if (this.classList.contains('correctly')) {
      this.style.backgroundColor = 'green';
    } else {
      // Иначе, задний фон становится красным
      this.style.backgroundColor = 'red';
    }
  });
});
var draggableElement = document.querySelectorAll('.draggable');
var droppableElements = document.querySelectorAll('.droppable');
draggableElement.forEach(function (draggableElement) {
  draggableElement.addEventListener('dragstart', dragstartHandler);
  draggableElement.addEventListener('dragend', dragendHandler);
});
droppableElements.forEach(function (droppableElement) {
  droppableElement.addEventListener('dragover', dragoverHandler);
  droppableElement.addEventListener('dragenter', dragenterHandler);
  droppableElement.addEventListener('dragleave', dragleaveHandler);
  droppableElement.addEventListener('drop', dropHandler);
});

function dragstartHandler(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.classList.add('transparent');
}

function dragendHandler(event) {
  event.target.classList.remove('transparent');
}

function dragoverHandler(event) {
  event.preventDefault();
}

function dragenterHandler(event) {
  event.target.classList.add('highlight');
}

function dragleaveHandler(event) {
  event.target.classList.remove('highlight');
}

function dropHandler(event) {
  event.preventDefault();
  var draggableElementId = event.dataTransfer.getData('text/plain');
  var droppableElementId = event.target.getAttribute('data-draggable-id');

  if (draggableElementId === droppableElementId) {
    var _draggableElement = document.getElementById(draggableElementId);

    event.target.appendChild(_draggableElement);
  }
}

window.addEventListener('load', function () {
  var draggableElementContainer = document.querySelector('.draggable-elements');
  var draggableElement = Array.from(draggableElementContainer.children); // Создаем массив случайных индексов

  var randomIndexes = Array.from({
    length: draggableElement.length
  }, function (_, index) {
    return index;
  }).sort(function () {
    return Math.random() - 0.5;
  }); // Создаем массив перемешанных блоков

  var shuffledElements = randomIndexes.map(function (index) {
    return draggableElement[index];
  }); // Очищаем контейнер

  draggableElementContainer.innerHTML = ''; // Вставляем перемешанные блоки обратно в контейнер

  shuffledElements.forEach(function (element) {
    draggableElementContainer.appendChild(element);
  });
}); // Get the container element

var container = document.querySelector('.stages__content_card'); // Get all the card elements within the container

var cards = container.querySelectorAll('.card'); // Convert the NodeList to an array

var cardsArray = Array.prototype.slice.call(cards); // Randomize the order of the cards

cardsArray.sort(function () {
  return 0.5 - Math.random();
}); // Append the shuffled cards back into the container

cardsArray.forEach(function (card) {
  container.appendChild(card);
});