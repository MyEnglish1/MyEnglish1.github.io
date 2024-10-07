const words = {
  	' творческий': 'creative',
  	'внук': 'grandson',
  	'племянник': 'nephew',
  	'племянница': 'niece',
  	'эффективный': 'efficient',
  	'оголенный, лысый': 'bald',
  	'друг, возлюбленный': 'boyfriend',
  	'толстый, упитанный': 'fat',
  	'средних лет': 'middle-aged',
  	'полный, грузный': 'overweight',
  	'худой': 'thin',
  	'подруга, любимая девушка': 'girlfriend',
  	'внучка': 'granddaughter',
  	'жена': 'wife',
  	'муж, супруг': 'husband',
  	'тетя': 'aunt',
  	'дядя': 'uncle',
  	'шеф, босс': 'boss',
  	'уже': 'already',
  	'неорганизованный,': 'disorganized',
  	'высота, вышина': 'height',
  	'очень, сильно, высоко': 'highly',
  	'поздно, опаздывать': 'late',
  	'ленивый': 'lazy',
  	'средний': 'medium',
  	'только что': 'only',
  	'short': 'short',
  	'высокий': 'tall',
  	'юный, молодой': 'young',

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
  