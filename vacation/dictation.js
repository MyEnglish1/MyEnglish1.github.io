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