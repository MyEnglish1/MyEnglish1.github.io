const words = {
    'вход, доступ': 'admission',
    "аквариум": 'aquarium',
    'зрительный зал':  'auditorium',
    'бар': 'bar',
    'начинать': 'begin',
    'кафе, закусочная': 'cafe',
    'классика': 'classic',
    'комедия': 'comedy',
    'концерт': 'concert',
    'драма, трагедия': 'drama',
    'ужас, страх': 'horror',
    'лекция': 'lecture',
    'мюзикл': 'musical',
    'ночной клуб': 'nightclub',
    'открывать': 'open',
    'представлять, играть': 'perform',
    'расслабляющий': 'relaxing',
    'любовный роман': 'romance',
    'представление, спектакль': 'play',
    'танец': 'dance',
    'игра': 'game',
    'кинофильм, фильм': 'movie',
    'ресторан': 'restaurant',
    'закрывать, закрываться': 'close',
    'заканчивать, заканчиваться': 'end',
    'стадион': 'stadium',
    'начался, стартовал': 'start',
    'неожиданный, внезапный': 'surprising',

  };

  let currentValue;

  function getRandomWord() {
      const values = Object.keys(words);
      currentValue = values[Math.floor(Math.random() * values.length)];
      document.getElementById('wordDisplay').textContent = currentValue;
  }

  function checkAnswer() {
      const userInput = document.getElementById('userInput').value.trim();
      const popup = document.getElementById('popup');
      const popupMessage = document.getElementById('popupMessage');
      const popupImg = document.getElementById('popupImg');

      if (userInput === words[currentValue]) {
          popupMessage.textContent = '';
          popupImg.src = 'correct-image-url.jpg'; // Замените на URL вашей картинки
          popup.style.display = 'block';

          setTimeout(() => {
              popup.style.display = 'none';
          }, 1000); // Закрываем всплывающее окно через 1 секунду

          getRandomWord();
      } else {
          alert('Неправильно! Правильный ответ: ' + words[currentValue]);
      }
      document.getElementById('userInput').value = '';
  }

  getRandomWord();
  
  
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
  