const words = {
     "зависимый":  "addicted",
     "алкоголик":  "alcoholic",
     "моральное состояние":  "morale",
     "обидный":  "offensive",
     "неряшливый":  "sloppy",
     "раствор, решение":  "solution",
     "полный":  "overweight",
     "проблема":  "problem",
     "нарушать":  "break",
     "покидать":  "quit",
     "начинать":  "begin",
     "неорганизованный":  "disorganized",
     "ленивый":  "lazy",
     "гибкий":  "flexible",
     "служащий":  "employee",
     "цена":  "cost",
     "кража":  "theft",
     "склонный поспорить":  "argumentative",
     "коммуникация":  "communication",
     "конкуренция":  "competition",
     "крайний срок":  "deadline",
     "финансовый":  "financial",
     "нововведение":  "innovation",
     "бессонница":  "insomnia",
     "недостаток":  "lack",
     "брачный": "marital",


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