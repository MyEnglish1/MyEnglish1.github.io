const words = {
    'отдыхать': 'relax',
    'терять': 'lose',
    'паспорт': 'passport',
    'долина': 'valley',
    'возвышение, холм': 'hill',
    'морское побережье': 'coast',
    'океан': 'ocean',
    'пляж': 'beach',
    'река': 'river',
    'гора': 'mountain',
    'пустыня': 'desert',
    'озеро': 'lake',
    'лес': 'forest',
    'ветренный': 'windy',
    'облачный': 'cloudy',
    'зима': 'winter',
    'лето': 'summer',
    'весна': 'spring',
    'осень': 'fall',
    'глетчер, ледник': 'glacier',
    'пустырь': 'wilderness',
    'теплее': 'warm',
    'поход по магазинам': 'shopping',
    'кемпинг': 'camping',
    'рыбная ловля': 'fishing',
    'посещаемый': 'visit',
    'водопад': 'waterfall',
    'ныряние': 'diving',
    'осмотр достопримечат': 'sightseeing',
    'спа': 'spa',


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
  