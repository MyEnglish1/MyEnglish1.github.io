const stagesItemContentRuElements = document.querySelectorAll('.stages__item_content_ru');
const stagesItemContentENElements = document.querySelectorAll('.stages__item_content_en');

stagesItemContentRuElements.forEach(element => {
    const newElement = document.createElement('div');
    newElement.classList.add('stages__item_content_img');
    newElement.innerHTML = '<img src="../../img/update-alt.svg" alt="img">';
    newElement.innerHTML = '<img src="../img/update-alt.svg" alt="img">';
    element.insertAdjacentElement('afterend', newElement);
});

let currentPhraseKey;
let currentPhraseValue;

function loadNextPhrase() {
    const keys = Object.keys(phrases);
    const randomIndex = Math.floor(Math.random() * keys.length);
    currentPhraseKey = keys[randomIndex];
    currentPhraseValue = phrases[currentPhraseKey];

    document.querySelector('.test__phrase_ru').innerText = currentPhraseValue;
    displayWords(currentPhraseKey);
}

function displayWords(phrase) {
    const words = phrase.split(' ');
    const wrapper = document.querySelector('.test__wrapper');
    wrapper.innerHTML = ''; // Очищаем предыдущие слова

    // Случайная сортировка слов
    words.sort(() => Math.random() - 0.5).forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'test__word';
        wordDiv.innerText = word;
        wordDiv.onclick = () => addWord(wordDiv, word);
        wrapper.appendChild(wordDiv);
    });
}

function addWord(wordDiv, word) {
    const phraseDiv = document.querySelector('.test__phrase_en');
    phraseDiv.innerText += (phraseDiv.innerText.length > 0 ? ' ' : '') + word;

    wordDiv.remove(); // Удаляем выбранное слово из обёртки
    
    checkAnswer(); // Переносим проверку ответов на следующий этап
}

function checkAnswer() {
    const currentAnswer = document.querySelector('.test__phrase_en').innerText.trim();
    
    // Проверка на полное заполнение
    if (currentAnswer.split(' ').length === currentPhraseKey.split(' ').length) {
        setTimeout(() => { // Используем setTimeout для отсрочки
            if (currentAnswer === currentPhraseKey) {
                alert(`Правильно! "${currentPhraseKey}"`);
                document.querySelector('.test__phrase_en').innerText = ''; // Сбрасываем ответ
            } else {
                alert(`Неверно! Правильная фраза: "${currentPhraseKey}"`);
                document.querySelector('.test__phrase_en').innerText = ''; // Сбрасываем ответ
                displayWords(currentPhraseKey); // Повторно отображаем слова
            }
            loadNextPhrase(); // Загружаем новую фразу после алерта
        }, 100); // 100 мс задержка для лучшего UX
    }
}

// Инициализация
loadNextPhrase();









$('ul.stages__tabs').on('click', 'li:not(.stages__tab_active)', function() {
  $(this)
    .addClass('stages__tab_active').siblings().removeClass('stages__tab_active')
    .closest('div.container').find('div.stages__content').removeClass('stages__content_active').eq($(this).index()).addClass('stages__content_active');
});




// Получаем все блоки с вариантами ответов
const answerChoices = document.querySelectorAll('.stages__answerChoice');

// Проходимся циклом по всем блокам с вариантами ответов
answerChoices.forEach(choice => {
  // При нажатии на блок
  choice.addEventListener('click', function() {
    // Если блок имеет класс 'correctly', задний фон становится зеленым
    if (this.classList.contains('correctly')) {
      this.style.backgroundColor = 'green';
    } else {
      // Иначе, задний фон становится красным
      this.style.backgroundColor = 'red';
    }
  });
});











const draggableElement = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

draggableElement.forEach(draggableElement => {
  draggableElement.addEventListener('dragstart', dragstartHandler);
  draggableElement.addEventListener('dragend', dragendHandler);
});

droppableElements.forEach(droppableElement => {
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
  const draggableElementId = event.dataTransfer.getData('text/plain');
  const droppableElementId = event.target.getAttribute('data-draggable-id');
  
  if (draggableElementId === droppableElementId) {
    const draggableElement = document.getElementById(draggableElementId);
    event.target.appendChild(draggableElement);
  }
}







window.addEventListener('load', function() {
  const draggableElementContainer = document.querySelector('.draggable-elements');
  const draggableElement = Array.from(draggableElementContainer.children);

  // Создаем массив случайных индексов
  const randomIndexes = Array.from({ length: draggableElement.length }, (_, index) => index)
      .sort(() => Math.random() - 0.5);

  // Создаем массив перемешанных блоков
  const shuffledElements = randomIndexes.map(index => draggableElement[index]);

  // Очищаем контейнер
  draggableElementContainer.innerHTML = '';

  // Вставляем перемешанные блоки обратно в контейнер
  shuffledElements.forEach(element => {
      draggableElementContainer.appendChild(element);
  });
});


// Get the container element
var container = document.querySelector('.stages__content_card');

// Get all the card elements within the container
var cards = container.querySelectorAll('.card');

// Convert the NodeList to an array
var cardsArray = Array.prototype.slice.call(cards);

// Randomize the order of the cards
cardsArray.sort(function() {
    return 0.5 - Math.random();
});

// Append the shuffled cards back into the container
cardsArray.forEach(function(card) {
    container.appendChild(card);
});



















       























