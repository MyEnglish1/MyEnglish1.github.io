const words = {
    "тело": "body",
    "секция, клетка":"cell",
    "уголь": "coal", 
    "ездить на работу в город": "commute",
    "базар, рынок": "market",
    "лечебный": "medical",
    "демонстрировать": "demonstrate",
    "эффективный": "effective",
    "электрический": "electric",
    "окружающая среда": "environment",
    "естественный, природный": "natural",
    "технология": "technology",
    "человек": "human",
    "прогнозировать": "predict",
    "шокирующий": "shocking",
    "сомневаться": "doubt",
    "оптимистичный": "optimistic",
    "пессимистический": "pessimistic",
    "творить": "create",
    "критиковать": "criticize",
    "конкурировать, соперничать": "compete",
    "нововведение": "innovation",
    "реалистичный": "realistic",
    "развивающийся": "developing",
    "загрязнение": "pollution",
    "светофор, робот": "robot",
    "сканер": "scanner",
    "телеконференция": "teleconference",

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