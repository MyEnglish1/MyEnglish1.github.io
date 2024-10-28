const words = {
     "актриса": "actress",
     "оригинальный": "original",
     "снять ремейк": "remake",
     "подзаголовок": "subtitle",
     "dark": "dark",
     "страшный, ужасный": "dreadful",
     "события": "action",
     "документальный фильм": "documentary",
     "триллер": "thriller",
     "ужас, страх": "horror",
     "комедия": "comedy",
     "любовный роман": "romance",
     "актор": "actor",
     "директор, режиссер,": "director",
     "костюм, одежда": "costume",
     "руководить, управлять": "direct",
     "начало": "beginning",
     "окончание, конец":  "ending",
     "неслыханный, невообразимый": "incredible",
     "удивительный": "amazing",
     "злой, дурной": "evil",
     "вестерн": "western",
     "персонаж, герой": "character",
     "знаменитый, известный": "famous",
     "сюжет, фабула, структура": "plot",
     "музыка к фильму": "soundtrack",
     "звезда, знаменитость": "star",
     "выступление, игра": "acting",


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
  