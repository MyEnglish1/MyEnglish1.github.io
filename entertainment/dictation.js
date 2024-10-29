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
  let correctCount = 0;
  let wrongCount = 0;
  
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
          // Правильный ответ
          correctCount++;
          document.querySelector('.lesson__header_right').textContent = correctCount;
  
          popupMessage.textContent = '';
          popupImg.src = 'correct-image-url.jpg'; // Замените на URL вашей картинки
          popup.style.display = 'block';
  
          setTimeout(() => {
              popup.style.display = 'none';
          }, 1000); // Закрываем всплывающее окно через 1 секунду
  
          getRandomWord();
      } else {
          // Неправильный ответ
          wrongCount++;
          document.querySelector('.lesson__header_wrong').textContent = wrongCount;
  
         
                      alert('Неправильно! Правильный ответ: ' + words[currentValue]);
  
          setTimeout(() => {
              popup.style.display = 'none';
          }, 1000); // Закрываем всплывающее окно через 1 секунду
  
          getRandomWord();
      }
      document.getElementById('userInput').value = '';
  }
  
  getRandomWord();