const words = {
    "новый выпуск": "update",
    "хорошо": "well",
    "общительный": "outgoing",
    "кто-нибудь": "anyone",
    "что-нибудь": "anything",
    "надежный": "reliable",
    "глупый, тупой": "stupid",
    "организованный": "organized",
    "быстрый, скорый": "fast",
    "трудный, утомительный, тяжелый": "hard",
    "робкий, стеснительный": "shy",
    "достойный, добропорядочный": "good",
    "для, ради": "for",
    "удивляться, дивиться": "wonder",
    "заставать врасплох": "surprise",
    "беспокоиться, волноваться": "worry",
    "говорить, сказать, произносить": "say",
    "причина": "reason",
    "рассказывать, рассказать": "tell",
    "добавочный, дальнейший": "further",
    "ожидать, надеяться, предполагать": "expect",
    "наем, прокат": "hire",
    "честный": "honest",
    "пункт, параграф, статья": "item",
    "с, начиная с, с тех пор как": "since",
    "суммировать, подводить итог": "summarize",
    "повестка дня": "agenda",
    "амбициозный": "ambitious",
    "умный, сметливый": "clever"

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
  