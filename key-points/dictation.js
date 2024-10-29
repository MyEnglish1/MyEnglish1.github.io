const words = {
   'жениться, выходить замуж': 'marry',
   'продвижение по службе': 'promotion',
   'выйти на пенсию': 'retire',
   'пенсия': 'retirement',
   'вне дома, за рубежом': 'abroad',
   'условленная встреча': 'appointment',
   'основа, база': 'background',
   'кандидат': 'candidate',
   'требующий напряжения сил': 'challenging',
   'образование': 'education',
   'опыт, опыт работы': 'experience',
   'впечатляющий, выразительный': 'impressive',
   'шанс, возможность': 'opportunity',
  'позиция': 'position', 
   'достоинство, сильная сторона': 'strength',
   'слабость': 'weakness',
   'рождение, роды': 'birth',
   'родиться': 'born',
   'мертвый, умерший': 'dead',
   'умереть': 'die',
   'оканчивать учебное заведение': 'graduate',
   'замужество,  свадьба': 'marriage',
   'команда': 'team',
   'скучать по кому-либо': 'miss',
   ' беременная': 'pregnant',
   'развод, разведенный': 'divorced',
   'градус, диплом': 'degree',
   'переезжать, переселяться': 'move',
   'резюме': 'resume',
   'собеседование': 'interview',


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