const words = {
	'билет': 'ticket',
	'поездка': 'trip',
	'упаковывать': 'pack',
	'багаж': 'luggage',
	'заказывать, бронировать': 'book',
	'без присмотра': 'unattended',
	'лимузин': 'limousine',
	'челнок, автобус': 'shuttle',
	'таможня': 'customs',
	'однако': 'yet',
	'аэропорт': 'airport',
	'гейт, выход': 'gate',
	' метро': 'subway',
	'выбор, вариант': 'option',
	'самолет': 'plane',
	'уже': 'already',
	' когда-либо': 'ever',
	'как например': 'as',
	'полет, перелет': 'flight',
	'авиакомпания': 'airline',
	'печать, шрифт': 'print',
	'терминал':'terminal',
	'виза': 'visa',
	'проход': 'aisle',
	'подниматься на борт': 'board',
	'сдавать': 'check',
	'задерживать': 'delay',
	'уезжать, покидать': 'depart',
	'расписание': 'schedule',
    'прибытие': 'arrival',


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
  