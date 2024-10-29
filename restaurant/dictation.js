const words = {
    'истинный, настоящий': 'authentic',
    'на открытом воздухе': 'outdoor',
    'парковка' : 'parking',
    'репутация': 'reputation',
    'места для сидения': 'seating',
    'разнообразие': 'variety',
    'закуска': 'appetizer',
    'основное блюдо': 'main course',
    'главный': 'main',
    'пенка, мусс': 'mousse',
    'шербет': 'sorbet',
    'первое блюдо, закуска': 'starter',
    'чаевые': 'tip',
    'чек': 'check',
    'платить': 'pay',
    'счет': 'bill',
    'оставлять': 'leave',
    'фирменное блюдо': 'speciality',
    'отзывы': 'reviews',
    'широкий': 'wide',
    'приемлемый': 'reasonable',
    'бесплатный': 'free',
    'бронирование': 'reservation',
    'официант':'waiter',	
    'десерт, сладкое': 'dessert',
    'несколько, немного': 'some',
    'всякий, любой': 'any',
    'накрывать на стол, подавать': 'serve',
    'суп': 'soup',
    'салат': 'salad',


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