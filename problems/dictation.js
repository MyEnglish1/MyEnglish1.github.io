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
  