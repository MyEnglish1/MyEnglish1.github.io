const words = {
    "правильный, точный": "correct",
    "левый": "left",
    "road": "right",
    "больница": "hospital",
    "бассейн": "pool",
    "настолько": "so",
    "наверняка, несомненно": "sure",
    "делать пересадку": "change",
    "вдали, далеко": "far",
    "близко, близлежащий": "near",
    "следующий": "next",
    "номер": "number",
    "остановка": "stop",
    "пользоваться, воспользоваться": "take",
    "тогда": "then",
    "булочная": "bakery",
    "за, позади, сзади": "behind",
    "книжный магазин": "bookshop",
    "оба, обе": "both",
    "отличный, отменный": "excellent",
    "стоянка автотранспорта": "parking",
    "место": "place",
    "место отдыха": "playground",
    "почта, почтовая контора": "postoffice",
    "супермаркет": "supermarket",

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
  