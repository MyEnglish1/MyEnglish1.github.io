const words = {
    "достигать": "reach",
    "ссылка": "reference",
    "ответ": "response",
    "резюме": "CV",
    "обязанности": "duty",
    "описание": "description",
    "название": "title",
    "образование": "education",
    "опыт": "experience",
    "заработная плата": "salary",
    "выгода, прибыль": "benefit",
    "цель": "goal",
    "резюме": "resume",
    "ответственность": "responsibility",
    "шанс": "opportunity",
    "доступный": "available",
    "позиция": "position",
    "собеседование": "interview",
    "сильная сторона": "strength",
    "слабость": "weakness",
    "впечатление": "impression",
    "окружающая среда": "environment",
    "компенсация": "compensation",
    "пакет": "package",
    "подходить": "fit",
    "процесс": "process",
    "прикреплять": "attach",

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