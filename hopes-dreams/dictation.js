const words = {
     "применять": "apply",
     "карьера": "career",
     "развитие": "development",
     "желать": "wish",
     "организованный": "organized",
     "путь, тропа": "path",
     "потенциал": "potential",
     "профессиональный": "professional",
     "благодарный": "rewarding",
     "навык": "skill",
     "нерешенный": "undecided",
     "сон, сновидение":  "dream",
     "энергия, сила": "energy",
     "будущее": "future",
     "ревнивый": "jealous",
     "адвокат": "lawyer",
     "приложение": "application",
     "быть к лицу": "become",
     "за границу": "abroad",
     "проект": "project",
     "управление": "management",
     "коммуникация, связь": "communication",
     "технический": "technical",
     "основа, база":  "background",
     "курс лекций": "course",
     "переезжать, переселяться": "move",
     "зарабатывать": "make",
     "надеяться": "hope",
     " возможность": "possibility",
 
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