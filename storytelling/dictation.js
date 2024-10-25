const words = {
  	

    'авария, происшествие': 'accident',
    'знакомый': 'acquaintance',
    'благодарный, признательный': 'grateful',
    'неожиданный': 'unexpected',
    'машина скорой помощи': 'ambulance',
    'начало': 'beginning',
    'позже': 'later',
    'в следующий раз': 'next',
    'после': 'after',
    'в заключение': 'finally',
    'конец, окончание': 'end',
    'дружище, приятель': 'buddy',
    'родственник': 'relative',
    'близкий': 'close',
    'старый': 'old',
    'коллега, сослуживец': 'colleague',
    'коллега по работе': 'co-worker',
    'шеф, босс': 'boss',
    'менеджер': 'manager',
    'удачный': 'lucky',
    'быстро, скоро': 'quickly',
    'очень, на самом деле': 'really',
    'счастливый': 'fortunate',
    'разбитый, сломанный': 'broken',
    'положительный': 'positive',
    'чувствовать, ощущать': 'feel',
    'неожиданный, удивительный': 'surprising',
    'казаться': 'seem',
    'ураган, шторм': 'storm',


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
  